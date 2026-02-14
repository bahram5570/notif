'use server';

import { CULTURE_COOKIE_NAME } from '@constants/cookie.constants';
import { CalendarTypeEnum, CultureTypes } from '@repo/core/providers/CultureProvider';
import { cookies } from 'next/headers';

// # Culture
export const setCultureCookie = async (culture: CultureTypes) => {
  cookies().set({
    value: JSON.stringify(culture),
    name: CULTURE_COOKIE_NAME,
    httpOnly: false,
    secure: false,
    path: '/',
  });
};

export const getCultureCookie = async () => {
  const cookie = cookies().get(CULTURE_COOKIE_NAME);
  const result: CultureTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

// # Clear
export const clearUserCookiesHandler = async () => {
  await setCultureCookie({ calendarType: CalendarTypeEnum.Jalali });
};
