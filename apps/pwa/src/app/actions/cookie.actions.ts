'use server';

import { CycleThemeEnum } from '@services/loginServices/enum';
import { getUserExpiresDate } from '@utils/cookies';
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
    secure: false,
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
  password: string;
  identity: string;
  loginId: string;
  token: string;
};

export const setUserCookie = async (props: UserCookieTypes) => {
  const identity = toEnglishNumbers(props.identity);
  const expires = getUserExpiresDate(30);

  const value = JSON.stringify({
    installationPurpose: props.installationPurpose,
    cycleTheme: props.cycleTheme,
    password: props.password,
    loginId: props.loginId,
    token: props.token,
    identity,
  });

  cookies().set({ name: USER_COOKIE_NAME, value, httpOnly: true, path: '/', secure: false, expires });
};

export const getUserCookie = async () => {
  const cookie = cookies().get(USER_COOKIE_NAME);
  const result: UserCookieTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

export const deleteUserCookie = async () => {
  cookies().delete(USER_COOKIE_NAME);
};
