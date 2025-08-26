import { FIREBASE_COOKIE_NAME, PAYMENT_COOKIE_NAME } from '@constants/cookie.constants';
import cookies from 'js-cookie';

export const cookieCreatedTime = (minutes?: number) => {
  const min = minutes || 60;
  const timeInterval = 1000 * 60 * min; // # 1 hour
  const createdTime = Date.now() + timeInterval;

  return createdTime;
};

export const getUserExpiresDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date;
};

// # Firebase

export const getFirebaseCookieToken = () => {
  const cookie = cookies.get(FIREBASE_COOKIE_NAME);
  return typeof cookie === 'string' ? cookie : '';
};

// # Payment

type PaymentCookieTypes = { route: string };

export const setPaymentCookie = (v: PaymentCookieTypes) => {
  cookies.set(PAYMENT_COOKIE_NAME, JSON.stringify(v), { expires: cookieCreatedTime(10) });
};

export const getPaymentCookie = () => {
  const cookie = cookies.get(PAYMENT_COOKIE_NAME);
  return cookie ? (JSON.parse(cookie) as PaymentCookieTypes) : null;
};

export const removePaymentCookie = () => {
  cookies.remove(PAYMENT_COOKIE_NAME);
};
