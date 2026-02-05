import { getUserExpiresDate } from '@utils/cookies';

import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';
import { FIREBASE_COOKIE_NAME, USER_COOKIE_NAME, USER_INFO_COOKIE_NAME } from '@constants/cookie.constants';
import { ACTIVATION_CR_REGISTER_QUERY_NAME } from '@constants/routes.constants';
import { NextResponse } from 'next/server';

import { HandleActivationCrLogginTypes } from './types';

export const handleActivationCrLoggin = async (props: HandleActivationCrLogginTypes) => {
  const response = props.response;

  const { searchParams } = new URL(props.request.nextUrl);
  const data = searchParams.get(ACTIVATION_CR_REGISTER_QUERY_NAME);

  if (data) {
    const userData = JSON.parse(data) as FetchedUserTypes;

    response.cookies.set(USER_COOKIE_NAME, JSON.stringify(userData.userCookie), {
      expires: getUserExpiresDate(365),
      httpOnly: true,
      secure: false,
      path: '/',
    });

    response.cookies.set(USER_INFO_COOKIE_NAME, JSON.stringify(userData.userInfoCookie), {
      httpOnly: false,
      secure: false,
      path: '/',
    });

    response.cookies.delete(FIREBASE_COOKIE_NAME);
  }

  return NextResponse.redirect(new URL('/', props.request.url), { headers: response.headers });
};
