'use client';

import { createContext } from 'react';

import useHasSignsChanged from './__hooks__/useHasSignsChanged';
import useInitailSelectedDate from './__hooks__/useInitailSelectedDate';
import { DateInSignContextTypes } from './type';

export const SignDateStateContext = createContext<DateInSignContextTypes>({
  calendarInitailSelectedDate: '',
  hasSignsChanged: false,
  changeCurrentDate: () => {},
  changeSignsStaus: () => {},
});

const SignDateStateProvider = ({ children }: { children: React.ReactNode }) => {
  const { calendarInitailSelectedDate, changeCurrentDate } = useInitailSelectedDate();
  const { changeSignsStaus, hasSignsChanged } = useHasSignsChanged();

  return (
    <SignDateStateContext.Provider
      value={{ calendarInitailSelectedDate, changeCurrentDate, hasSignsChanged, changeSignsStaus }}
    >
      <>{children}</>
    </SignDateStateContext.Provider>
  );
};

export default SignDateStateProvider;
