import http from '@services/http';
import { cookieCreatedTime, getUserExpiresDate } from '@utils/cookies';

import { UserCookieTypes, getUserCookie } from '@actions/cookie.actions';
import { APP_VERSION } from '@constants/app.constants';
import { FIREBASE_COOKIE_NAME, USER_COOKIE_NAME } from '@constants/cookie.constants';
import { ACTIVATION_CR_REGISTER_QUERY_NAME } from '@constants/routes.constants';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { HandleActivationCrLogginTypes, HandleUserStatusTypes, LoginResponseTypes } from './types';

const checkUserStatus = async () => {
  const cookie = cookies();
  const user = await getUserCookie();

  if (user) {
    const createdTime = user?.createdTime || 0;

    if (Date.now() > createdTime) {
      const deviceToken = cookie.get(FIREBASE_COOKIE_NAME)?.value || '';

      const payload = {
        deviceToken,
        phoneModel: '',
        channelVersion: '',
        identity: user.identity,
        password: user.password,
        version: APP_VERSION || '',
      };

      return await http<LoginResponseTypes>({
        payload,
        method: 'POST',
        url: 'CustomerAccount/Loginv6',
      });
    }

    return 'hasTime';
  }

  return 'hasTime';
};

export const handleUserStatus = async (props: HandleUserStatusTypes) => {
  const statusData = await checkUserStatus();

  const response = props.response;

  if (statusData !== 'hasTime') {
    const { data: loginData } = statusData;
    const isValid = typeof loginData === 'undefined' ? true : loginData.result;

    if (isValid) {
      if (loginData) {
        const userData = JSON.parse(props.userCookie.value) as UserCookieTypes;

        userData.token = loginData.token;
        userData.createdTime = cookieCreatedTime();
        userData.installationPurpose = { status: loginData.status, periodStatus: loginData.periodStatus };

        response.cookies.set(USER_COOKIE_NAME, JSON.stringify(userData), {
          expires: getUserExpiresDate(30),
          httpOnly: true,
          secure: false,
          path: '/',
        });
      }
    } else {
      response.cookies.delete(USER_COOKIE_NAME);
    }
  }

  return response;
};

export const handleActivationCrLoggin = async (props: HandleActivationCrLogginTypes) => {
  const response = props.response;

  const { searchParams } = new URL(props.request.nextUrl);
  const userData = searchParams.get(ACTIVATION_CR_REGISTER_QUERY_NAME);

  if (userData) {
    response.cookies.set(USER_COOKIE_NAME, userData, {
      expires: getUserExpiresDate(365),
      httpOnly: true,
      secure: false,
      path: '/',
    });

    response.cookies.delete(FIREBASE_COOKIE_NAME);
  }

  return NextResponse.redirect(new URL('/', props.request.url), { headers: response.headers });
};
