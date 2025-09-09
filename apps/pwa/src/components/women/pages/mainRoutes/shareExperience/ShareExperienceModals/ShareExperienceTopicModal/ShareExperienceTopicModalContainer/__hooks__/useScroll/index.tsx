import { useEffect, useState } from 'react';

type UseScrollProps = {
  id: string;
};

const useScroll = ({ id }: UseScrollProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const handleScroll = () => {
      if (element.scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  return { scrolled };
};

export default useScroll;
