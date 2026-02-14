'use server';

import { getExpireDate } from '@repo/core/utils/cookies';
import { toEnglishNumbers } from '@repo/core/utils/numbers';
import { CycleThemeEnum } from '@services/loginServices/enum';

import {
  CULTURE_COOKIE_NAME,
  FIREBASE_COOKIE_NAME,
  PAYMENT_COOKIE_NAME,
  USER_COOKIE_NAME,
  USER_INFO_COOKIE_NAME,
} from '@constants/cookie.constants';
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

// # User
export type UserCookieTypes = {
  password: string;
  identity: string;
  loginId: string;
  token: string;
};

export const setUserCookie = async (props: UserCookieTypes) => {
  const identity = toEnglishNumbers(props.identity);
  const expires = getExpireDate(30);

  const value = JSON.stringify({
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

// # User info
export type UserInfoCookieTypes = {
  installationPurpose: { status: number; periodStatus: number };
  cycleTheme: CycleThemeEnum;
};

export const setUserInfoCookie = async (props: UserInfoCookieTypes) => {
  const expires = getExpireDate(30);

  const value = JSON.stringify({
    installationPurpose: props.installationPurpose,
    cycleTheme: props.cycleTheme,
  });

  cookies().set({ name: USER_INFO_COOKIE_NAME, value, httpOnly: false, path: '/', secure: false, expires });
};

export const getUserInfoCookie = async () => {
  const cookie = cookies().get(USER_INFO_COOKIE_NAME);
  const result: UserInfoCookieTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

// # Firebase
export const getFirebaseTokenCookie = async () => {
  const cookie = cookies().get(FIREBASE_COOKIE_NAME);
  const result = cookie ? cookie.value : null;
  return result;
};

export const setFirebaseTokenCookie = async (ft: string) => {
  const expires = getExpireDate(365);
  cookies().set({ name: FIREBASE_COOKIE_NAME, value: ft, httpOnly: false, path: '/', secure: false, expires });
};

// # Payment
type PaymentCookieTypes = { route: string };

export const setPaymentCookie = async (v: PaymentCookieTypes) => {
  const expires = getExpireDate(10);
  const value = JSON.stringify(v);
  cookies().set({ name: PAYMENT_COOKIE_NAME, value, httpOnly: false, path: '/', secure: false, expires });
};

export const getPaymentCookie = async () => {
  const cookie = cookies().get(PAYMENT_COOKIE_NAME);
  const result: PaymentCookieTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

export const removePaymentCookie = async () => {
  cookies().delete(PAYMENT_COOKIE_NAME);
};

// # Clear
export const clearUserCookiesHandler = async () => {
  cookies().delete(USER_COOKIE_NAME);
  cookies().delete(USER_INFO_COOKIE_NAME);

  await removePaymentCookie();
  await setCultureCookie({ calendarType: CalendarTypeEnum.Jalali });
};
