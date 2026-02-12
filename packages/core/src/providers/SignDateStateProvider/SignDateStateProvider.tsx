'use client';

import { createContext } from 'react';

import useHasSignsChanged from './__hooks__/useHasSignsChanged';
import useInitailSelectedDate from './__hooks__/useInitailSelectedDate';
import { DateInSignContextTypes, SignDateStateProviderTypes } from './types';

export const SignDateStateContext = createContext<DateInSignContextTypes>({
  calendarInitailSelectedDate: '',
  changeCurrentDate: () => {},
  changeSignsStaus: () => {},
  hasSignsChanged: false,
});

export const SignDateStateProvider = ({ children, dateRoutes, toastRoutes }: SignDateStateProviderTypes) => {
  const { calendarInitailSelectedDate, changeCurrentDate } = useInitailSelectedDate(dateRoutes);
  const { changeSignsStaus, hasSignsChanged } = useHasSignsChanged(toastRoutes);

  return (
    <SignDateStateContext.Provider
      value={{ calendarInitailSelectedDate, changeCurrentDate, hasSignsChanged, changeSignsStaus }}
    >
      <>{children}</>
    </SignDateStateContext.Provider>
  );
};
