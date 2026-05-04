import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ShareExperienceInView = ({ children }: { children: React.ReactNode }) => {
  const dataRef = useRef<HTMLDivElement>(null);
  const { ref: containerRef, inView } = useInView();
  const [elementHeight, setElementHeight] = useState<number | undefined>();

  useEffect(() => {
    setTimeout(() => {
      const el = dataRef.current;

      if (el) {
        setElementHeight(el.clientHeight);
      }
    }, 100);
  }, []);

  const showData = inView || elementHeight === undefined;

  return (
    <div className="w-full" ref={containerRef} style={{ minHeight: elementHeight }}>
      {showData && (
        <div ref={dataRef}>
          <>{children}</>
        </div>
      )}
    </div>
  );
};

export default ShareExperienceInView;
