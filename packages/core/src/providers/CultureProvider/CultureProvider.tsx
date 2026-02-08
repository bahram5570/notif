'use client';

import { createContext, useEffect, useState } from 'react';

import { CalendarTypeEnum } from './enum';
import { CultureConextTypes, CultureHandlerTypes, CultureProviderTypes, CultureTypes } from './types';

// import { setCultureCookie } from '@actions/userCookies.actions';

export const CULTURE_INITIAL_VALUES: CultureTypes = { calendarType: CalendarTypeEnum.Jalali };

export const CultureConext = createContext<CultureConextTypes>({
  cultureHandler: () => {},
  culture: CULTURE_INITIAL_VALUES,
});

export const CultureProvider = ({ children, defaultValues }: CultureProviderTypes) => {
  const [culture, setCulture] = useState<CultureTypes>(defaultValues || CULTURE_INITIAL_VALUES);

  const cultureHandler: CultureHandlerTypes = async (name, value) => {
    const result = { ...culture, [name]: value };

    setCulture(result);
    // await setCultureCookie(result);
  };

  useEffect(() => {
    const handleDefaultValues = async () => {
      if (defaultValues === null) {
        // await setCultureCookie(CULTURE_INITIAL_VALUES);
      }
    };

    handleDefaultValues();
  }, []);

  return (
    <CultureConext.Provider value={{ culture, cultureHandler }}>
      <>{children}</>
    </CultureConext.Provider>
  );
};
