const BASE = import.meta.env.VITE_MEDIA_BASE_URL || '';

export const mediaUrl = {
  image: (name) => `${BASE}/media/images/${name}`,
  video: (name) => `${BASE}/media/videos/${name}`,
  doc: (name) => `${BASE}/media/docs/${name}`,
  root: (name) => `${BASE}/${name}`,
};
