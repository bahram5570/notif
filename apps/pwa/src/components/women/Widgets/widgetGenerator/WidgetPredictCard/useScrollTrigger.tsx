import { useEffect } from 'react';

interface UseScrollTriggerProps {
  elementId: string;
  percent?: number;
  onTrigger: () => void;
}

export const useScrollTrigger = ({ elementId, percent = 50, onTrigger }: UseScrollTriggerProps): void => {
  useEffect(() => {
    const element = document.getElementById(elementId) as HTMLDivElement | null;
    if (!element) return;

    let triggered = false;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const scrollProgress = ((scrollLeft + clientWidth) / scrollWidth) * 100;

      if (!triggered && scrollProgress >= percent) {
        onTrigger();
        triggered = true;
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [elementId, percent, onTrigger]);
};
