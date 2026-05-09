import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (el.scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, scrollRef };
};

export default useScroll;
