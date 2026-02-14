import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  // const pathname = request.nextUrl.pathname;

  return response;
};

export const config = {
  matcher: ['/'],
};
