import http from '@services/http';

import { OLD_OPEN_APP_LINKS } from '@constants/links.constants';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // # Remove 'www' from the host
  const hostname = request.headers.get('host') || request.nextUrl.hostname;
  const hasWWW = hostname.startsWith('www.');
  const isLocalhost = hostname.includes('localhost');

  console.log(' hostname ---> ', hostname);

  if (hasWWW && !isLocalhost) {
    const newHostname = hostname.replace('www.', '');
    const url = request.nextUrl.clone(); // # 'clone()' preserves everything (pathname, params, etc.)
    url.host = newHostname;

    return NextResponse.redirect(url.toString(), { status: 301 });
  }

  // # Redirects outdated 'terms' page links from older app versions to the correct URL
  if (OLD_OPEN_APP_LINKS.includes(pathname)) {
    return NextResponse.redirect(new URL('/terms', request.url));
  }

  // # To enable embedding the app in iframes for paths starting with '/webView'.
  if (request.nextUrl.pathname.startsWith('/webView')) {
    response.headers.set('X-Frame-Options', 'ALLOWALL');
    response.headers.set('Content-Security-Policy', 'frame-ancestors *');
    return response;
  }

  // #
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newPath = pathname.slice(0, -1);
    return NextResponse.redirect(new URL(newPath, request.url), { status: 301 });
  }

  // # Handles redirections by using "support/redirection?Uri=${uri}" API
  try {
    const uri = pathname.startsWith('/') && pathname.replace('/', '');

    const { data } = await http<{
      url: string;
      status: number;
      valid: boolean;
      redirect: string;
    }>({ url: `support/redirection?Uri=${uri}` });

    if (data && data.valid) {
      const newUrl = `${request.nextUrl.origin}/${data.redirect}`;
      return NextResponse.redirect(newUrl, { status: data.status });
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:css|svg|png|jpg|jpeg|webp|gif|ico|woff|woff2|ttf|eot|otf|map)).*)',
  ],
};
