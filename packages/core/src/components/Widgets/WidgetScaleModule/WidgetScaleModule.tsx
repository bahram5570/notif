import { useEffect, useRef, useState } from 'react';

import { useDelayCallback } from '../../../hooks/useDelayCallback';

export const WidgetScaleModule = ({ children }: { children: React.ReactNode }) => {
  const [showElement, setShowElement] = useState(Boolean);
  const ref = useRef<HTMLDivElement>(null);

  const heightFinder = () => {
    const el = ref.current;

    if (el) {
      el.style.setProperty('--maxHight', el.clientHeight + 'px');
      setShowElement(true);
    }
  };

  const { startDelay } = useDelayCallback(heightFinder);

  useEffect(() => {
    startDelay(100);
  }, [ref.current]);

  return (
    <div ref={ref} className={`WidgetScaleModule ${showElement && 'WidgetScaleModule_scaling'}`}>
      {children}
    </div>
  );
};
