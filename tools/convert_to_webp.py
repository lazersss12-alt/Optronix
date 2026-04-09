#!/usr/bin/env python3
"""
Convert all images in a folder to WebP.

Install:
  pip install pillow

Examples:
  python tools/convert_to_webp.py -i src/components/img
  python tools/convert_to_webp.py -i src/components/img -o src/components/img_webp -q 82
  python tools/convert_to_webp.py -i src/components/img --lossless
"""
import argparse
import os
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Iterable, Tuple

from PIL import Image, ImageSequence, ImageOps

SUPPORTED_EXTS = {".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".tif", ".gif"}
WEBP_EXT = ".webp"

def find_images(root: Path, recursive: bool) -> Iterable[Path]:
  if recursive:
    yield from (p for p in root.rglob("*") if p.is_file() and p.suffix.lower() in SUPPORTED_EXTS)
  else:
    yield from (p for p in root.glob("*") if p.is_file() and p.suffix.lower() in SUPPORTED_EXTS)

def make_output_path(src: Path, src_root: Path, out_root: Path | None) -> Path:
  if out_root:
    rel = src.relative_to(src_root)
    return (out_root / rel).with_suffix(WEBP_EXT)
  return src.with_suffix(WEBP_EXT)

def ensure_parent_dir(path: Path) -> None:
  path.parent.mkdir(parents=True, exist_ok=True)

def _convert_static_image(img: Image.Image) -> Image.Image:
  img = ImageOps.exif_transpose(img)
  if img.mode in ("RGBA", "LA") or ("transparency" in img.info):
    return img.convert("RGBA")
  return img.convert("RGB")

def convert_one(
  src: Path,
  dst: Path,
  *,
  quality: int,
  lossless: bool,
  method: int,
  keep_metadata: bool,
  convert_animated: bool,
  overwrite: bool,
) -> Tuple[Path, bool, str | None]:
  try:
    if not overwrite and dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
      return (src, False, "skip (up-to-date)")

    ensure_parent_dir(dst)

    with Image.open(src) as im:
      exif = im.info.get("exif") if keep_metadata else None
      icc = im.info.get("icc_profile") if keep_metadata else None

      is_animated_gif = im.format == "GIF" and getattr(im, "n_frames", 1) > 1
      if convert_animated and is_animated_gif:
        frames = [ImageOps.exif_transpose(frm.convert("RGBA")) for frm in ImageSequence.Iterator(im)]
        durations = [frm.info.get("duration", im.info.get("duration", 0)) for frm in ImageSequence.Iterator(im)]
        first, rest = frames[0], frames[1:]
        save_kwargs = dict(
          format="WEBP", save_all=True, append_images=rest,
          duration=durations, loop=0,
          quality=quality, lossless=lossless, method=method,
        )
        if exif: save_kwargs["exif"] = exif
        if icc:  save_kwargs["icc_profile"] = icc
        first.save(dst, **save_kwargs)
        return (src, True, "animated")
      else:
        img = _convert_static_image(im)
        save_kwargs = dict(format="WEBP", quality=quality, lossless=lossless, method=method)
        if exif: save_kwargs["exif"] = exif
        if icc:  save_kwargs["icc_profile"] = icc
        img.save(dst, **save_kwargs)
        return (src, True, "static")
  except Exception as e:
    return (src, False, f"error: {e}")

def main():
  parser = argparse.ArgumentParser(description="Convert images to WebP.")
  parser.add_argument("-i", "--input", type=Path, required=True, help="Input folder")
  parser.add_argument("-o", "--output", type=Path, help="Output folder (default: next to originals)")
  parser.add_argument("-q", "--quality", type=int, default=80, help="WebP quality 0–100 (ignored if --lossless)")
  parser.add_argument("--lossless", action="store_true", help="Use lossless WebP")
  parser.add_argument("--method", type=int, default=6, choices=range(0,7), help="Encoder effort 0–6 (6=smallest)")
  parser.add_argument("-r", "--recursive", action="store_true", default=True, help="Recurse (default on)")
  parser.add_argument("--no-recursive", dest="recursive", action="store_false", help="Do not recurse")
  parser.add_argument("--strip-metadata", action="store_true", help="Drop EXIF/ICC")
  parser.add_argument("--no-animated", action="store_true", help="Disable GIF→animated WebP")
  parser.add_argument("--overwrite", action="store_true", help="Overwrite existing .webp")
  parser.add_argument("-w", "--workers", type=int, default=os.cpu_count() or 4, help="Parallel workers")
  args = parser.parse_args()

  src_root = args.input.resolve()
  if not src_root.exists() or not src_root.is_dir():
    raise SystemExit(f"Input folder not found: {src_root}")

  out_root = args.output.resolve() if args.output else None
  if out_root:
    out_root.mkdir(parents=True, exist_ok=True)

  images = list(find_images(src_root, args.recursive))
  if not images:
    print("No images found.")
    return

  print(f"Found {len(images)} images.")
  print(f"Quality={args.quality}, Lossless={args.lossless}, Method={args.method}, "
        f"Recursive={args.recursive}, Keep metadata={not args.strip_metadata}, "
        f"Animated GIFs={'on' if not args.no_animated else 'off'}, "
        f"Output={'in-place' if not out_root else out_root}")

  jobs = []
  with ThreadPoolExecutor(max_workers=max(1, args.workers)) as ex:
    for src in images:
      dst = make_output_path(src, src_root, out_root)
      if src.suffix.lower() == WEBP_EXT:
        continue
      jobs.append(ex.submit(
        convert_one, src, dst,
        quality=args.quality, lossless=args.lossless, method=args.method,
        keep_metadata=not args.strip_metadata, convert_animated=not args.no_animated,
        overwrite=args.overwrite,
      ))

    converted = skipped = failed = 0
    for fut in as_completed(jobs):
      src, ok, info = fut.result()
      if ok:
        converted += 1
        print(f"[OK] {src} -> {info}")
      else:
        if info and info.startswith("skip"):
          skipped += 1
          print(f"[SKIP] {src} ({info})")
        else:
          failed += 1
          print(f"[FAIL] {src} ({info})")

  print(f"Done. Converted: {converted}, Skipped: {skipped}, Failed: {failed}")

if __name__ == "__main__":
  main()