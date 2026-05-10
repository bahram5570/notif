import { handleActivationCrLoggin } from '@services/loginServices';
import { paymentStatusService } from '@services/paymentServices';
import { handleReferralLinksService } from '@services/referralLinksServices';

import { UserCookieTypes } from '@actions/userCookies.actions';
import { PARTNER_CODE_SHOW_INPUT_QUERY_NAME } from '@components/activation/pages/PartnerCodeContainer/constants';
import { USER_COOKIE_NAME } from '@constants/cookie.constants';
import { ACTIVATION_CR_REGISTER_QUERY_NAME } from '@constants/routes.constants';
import { ACTIVATION_FIRST_PATH } from '@providers/__activation__/ActivationProvider/__constants__/activationContants';
import * as Sentry from '@sentry/nextjs';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const queryParams = request.nextUrl.search?.slice(1) || '';

  // # Enables embedding of all app pages in iframes by setting X-Frame-Options to ALLOWALL
  response.headers.set('X-Frame-Options', 'ALLOWALL');
  response.headers.set('Content-Security-Policy', 'frame-ancestors *');

  // # // Skips middleware processing for non-page paths like Next.js assets, public files, favicon, or file extensions
  if (
    pathname.match(/\.(.*)$/) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return response;
  }

  const userCookie = cookies().get(USER_COOKIE_NAME);

  // // # Set 'loginId' for Sentry
  // todo: temporarily
  // if (userCookie) {
  //   const userData = JSON.parse(userCookie.value) as UserCookieTypes;
  //   Sentry.setUser({ loginId: userData.loginId });
  // }

  // # Detects 'activationCrRegister' query params to identify users redirected from website with completed registration
  if (queryParams.includes(ACTIVATION_CR_REGISTER_QUERY_NAME)) {
    return await handleActivationCrLoggin({ response, request });
  }

  const isReferralLinksPage = pathname.startsWith('/referralLinks');
  const isActivationCrPage = pathname.startsWith('/activationCr');
  const isActivationPage = pathname.startsWith('/activation');
  const isProtectedPage = pathname.startsWith('/protected');
  const isEmptyPage = pathname === '/';

  // # Convert referral links by route of 'referralLink' to inner routes
  if (isReferralLinksPage) {
    return await handleReferralLinksService(queryParams, request.url);
  }

  // # Renders pages directly for '/activationCr' paths without additional conditions or redirects
  if (isActivationCrPage) {
    return response;
  }

  const isRegisterPartnerCode = isActivationPage && queryParams.includes(PARTNER_CODE_SHOW_INPUT_QUERY_NAME);
  if (isRegisterPartnerCode) {
    return response;
  }

  // # JWT token cookie is empty
  if (!userCookie) {
    // # If request is for base URL ('/') or requires JWT token, redirect to the first 'activation' page
    if (isEmptyPage || isProtectedPage) {
      return NextResponse.redirect(new URL(`/activation/${ACTIVATION_FIRST_PATH}`, request.url));
    }

    return response;
  }

  // # JWT token cookie is present
  if (userCookie) {
    if (isEmptyPage) {
      // # If bank-related query-params are present, handle redirect
      const { paymentResponse } = await paymentStatusService(queryParams, request.url);
      if (paymentResponse) {
        return paymentResponse;
      }

      return NextResponse.redirect(new URL('/protected/cycle', request.url));
    }

    // # If pathname starts with '/activation', redirect to '/cycle' page
    if (isActivationPage) {
      return NextResponse.redirect(new URL('/protected/cycle', request.url));
    }
  }

  return response;
};

export const config = {
  matcher: ['/', '/activation/:path*', '/activationCr/:path*', '/protected/:path*', '/referralLinks/:path*'],
};
