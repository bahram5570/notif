import { useEffect, useState } from 'react';

import { useScrollPropsType } from './type';

const useScroll = ({ ref }: useScrollPropsType) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px',
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { scrolled };
};

export default useScroll;
