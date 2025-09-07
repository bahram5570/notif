'use client';

import { createContext, useEffect, useState } from 'react';

import { convertToPersianOrdinal } from '@utils/numbers';

import useCustomToast from '@hooks/useCustomToast';

import { initailValue } from './constant';
import { CurrentRoutinIndexContextPropsType, RoutinState } from './type';

export const CurrentRoutinIndexContext = createContext<CurrentRoutinIndexContextPropsType>({
  routinState: initailValue,
  updateRoutinState: () => {},
});

const CurrentRoutinIndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [routinState, setRoutinState] = useState<RoutinState>(initailValue);
  const { onToast } = useCustomToast();

  const updateRoutinState = (nameOrState: keyof RoutinState | Partial<RoutinState>, value?: number | boolean) => {
    setRoutinState((prev) => {
      if (typeof nameOrState === 'string') {
        return { ...prev, [nameOrState]: value! };
      } else {
        return { ...prev, ...nameOrState };
      }
    });
  };

  useEffect(() => {
    if (routinState.showToast && routinState.currentIndex !== undefined && routinState.typeMessage !== undefined) {
      let message =
        routinState.typeMessage === 'lockOnlock'
          ? `  مرحله ${convertToPersianOrdinal(routinState.currentIndex)} با موفقیت انجام و مرحله ${convertToPersianOrdinal(routinState.currentIndex + 1)} آنلاک شد`
          : `  مرحله ${convertToPersianOrdinal(routinState.currentIndex)} چک لیست با موفقیت انجام شد`;

      onToast({
        type: 'success',
        message,
        position: 'bottom-center',
        style: { margin: '15px' },
      });

      setRoutinState(initailValue);
    }
  }, [routinState]);

  return (
    <CurrentRoutinIndexContext.Provider value={{ routinState, updateRoutinState }}>
      {children}
    </CurrentRoutinIndexContext.Provider>
  );
};

export default CurrentRoutinIndexProvider;
