'use server';

import { CycleThemeEnum } from '@services/loginServices/enum';
import { cookieCreatedTime, getUserExpiresDate } from '@utils/cookies';
import { toEnglishNumbers } from '@utils/numbers';

import { CULTURE_COOKIE_NAME, USER_COOKIE_NAME } from '@constants/cookie.constants';
import { CultureTypes } from '@providers/CultureProvider/types';
import { cookies } from 'next/headers';

// # Culture
export const setCultureCookie = async (culture: CultureTypes) => {
  cookies().set({
    value: JSON.stringify(culture),
    name: CULTURE_COOKIE_NAME,
    httpOnly: false,
    path: '/',
  });
};

export const getCultureCookie = async () => {
  const cookie = cookies().get(CULTURE_COOKIE_NAME);
  const result: CultureTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

export const deleteCultureCookie = async () => {
  cookies().delete(CULTURE_COOKIE_NAME);
};

// # User

export type UserCookieTypes = {
  installationPurpose: { status: number; periodStatus: number };
  cycleTheme: CycleThemeEnum;
  createdTime?: number;
  password: string;
  identity: string;
  token: string;
};

export const sssetUserCookie = async (props: UserCookieTypes) => {
  const expires = getUserExpiresDate(30);
  const identity = toEnglishNumbers(props.identity);
  const createdTime = props.createdTime || cookieCreatedTime();

  const value = JSON.stringify({
    installationPurpose: props.installationPurpose,
    cycleTheme: props.cycleTheme,
    password: props.password,
    token: props.token,
    createdTime,
    identity,
  });

  cookies().set({ name: USER_COOKIE_NAME, value, httpOnly: true, path: '/', secure: true, expires });
};

export const gggetUserCookie = async () => {
  const cookie = cookies().get(USER_COOKIE_NAME);
  const result: UserCookieTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

export const deleteUserCookie = async () => {
  cookies().delete(USER_COOKIE_NAME);
};
