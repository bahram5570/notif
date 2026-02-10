import { useEffect, useState } from 'react';

import { useScrollPropsType } from './type';

const useScroll = ({ ref, root }: useScrollPropsType) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current || !root?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: root.current,
        threshold: 0,
      },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, root]);

  return { scrolled };
};

export default useScroll;
