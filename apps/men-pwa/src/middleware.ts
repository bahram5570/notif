import { USER_COOKIE_NAME } from '@constants/cookie.constants';
import { ACTIVATION_FIRST_PATH } from '@providers/__activation__/ActivationProvider/__constants__/activationContants';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

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

  const isActivationPage = pathname.startsWith('/activation');
  const isProtectedPage = pathname.startsWith('/protected');
  const isEmptyPage = pathname === '/';

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
      return NextResponse.redirect(new URL('/protected/partner', request.url));
    }

    // # If pathname starts with '/activation', redirect to '/partner' page
    if (isActivationPage) {
      return NextResponse.redirect(new URL('/protected/partner', request.url));
    }
  }

  return response;
};

export const config = {
  matcher: ['/', '/activation/:path*', '/protected/:path*'],
};
