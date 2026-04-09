import { useEffect, useRef, useState } from 'react';

const LazySection = ({
  children,
  minHeight = 0,
  rootMargin = '300px',
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} className={className} style={{ minHeight, ...style }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;
