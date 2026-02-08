import { UserCookieTypes, getUserCookie } from '@actions/userCookies.actions';
import { CULTURE_COOKIE_NAME, USER_COOKIE_NAME } from '@constants/cookie.constants';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// export const GET = async () => {
//   // const user = await getUserCookie();
//   console.log('*********************************');
//   console.log('*********************************');
//   console.log('*********************************');
//   console.log('*********************************');

//   const cookie = cookies().get(USER_COOKIE_NAME);
//   console.log(cookie);

//   const result: UserCookieTypes | null = cookie ? JSON.parse(cookie.value) : null;

//   return Response.json({ result });
// };

export async function GET(request: NextRequest) {
  const cookieStore = cookies(); // Get cookies from the request
  const cookieValue = cookieStore.getAll();

  console.log('---------- ', cookieValue);

  // const cookieStore = cookies();
  // const theme = cookieStore.get('firebaseToken')?.value;
  // console.log(theme);

  // const cookie = await cookies();
  // const co = cookies().get('firebaseToken');
  // console.log(co);

  return NextResponse.json({
    cookie: '',
  });
}
