'use client';

import { createContext, useRef, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { MODAL_DEFAULT_Z_INDEX } from './constant';
import { OverlayIndexContextType } from './type';

export const OverlayIndexContext = createContext<OverlayIndexContextType>({
  increaseZIndex: () => {},
  zIndex: MODAL_DEFAULT_Z_INDEX,
});

const OverlayIndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [zIndex, setZIndex] = useState(MODAL_DEFAULT_Z_INDEX);
  const searchParams = useSearchParams();
  const prevValuesRef = useRef<string[]>([]);

  const handleIncreaseZIndex = () => {
    const values = Array.from(searchParams.values());
    const prevValues = prevValuesRef.current;

    const changed = values.some((v, i) => v !== prevValues[i]) || values.length !== prevValues.length;

    if (changed) {
      setZIndex((prev) => prev + 1);
    }
    prevValuesRef.current = values;
  };

  return (
    <OverlayIndexContext.Provider value={{ increaseZIndex: handleIncreaseZIndex, zIndex }}>
      {children}
    </OverlayIndexContext.Provider>
  );
};

export default OverlayIndexProvider;
