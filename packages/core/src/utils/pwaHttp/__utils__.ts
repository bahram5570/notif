// // @ts-ignore
// import { clearUserCookiesHandler, getUserCookie } from '@actions/userCookies.actions';
import { PwaHttpOptionsTypes, PwaHttpTypes } from './types';

export const httpOptionsMaker = async (props: PwaHttpTypes) => {
  // const user = await getUserCookie();
  // const Authorization = user ? `Bearer ${user.token}` : undefined;
  // const Authorization = undefined;
  const Authorization =
    'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4MDIwMDY3OTcsImlhdCI6MTc3MDQ3MDc5NywiVXNlck5hbWUiOiI2ODQ2NjNhM2YyMGU0YzA0MDc5YTdmYzIiLCJBcHBWZXJzaW9uIjoiNS4xMy4wIFBXQSBXRUJTSVRFIiwiVXNlclR5cGUiOiJXb21hbiIsIlVzZXJJRCI6IjY4NDY2M2EzZjIwZTRjMDQwNzlhN2ZjMiIsInBlcm1pc3Npb25zIjpbIjIwMiIsIjIwMCIsIjIwMSIsIjIwMyJdLCJyb2xlIjoiQ3VzdG9tZXIiLCJuYmYiOjE3NzA0NzA3OTd9.XVqCR72SZZLqFkh3ki0hwdEN7guvRnTf6k56qH0YX48';

  let headers = {};
  headers = { ...headers, Authorization };

  let httpOptions: PwaHttpOptionsTypes = { method: props.method || 'GET' };

  if (props.method === 'POST' || props.method === 'PUT' || props.method === 'DELETE') {
    let body = undefined;

    if (props.contentType === 'multipart/form-data') {
      body = props.payload;
    } else {
      headers = { ...headers, 'Content-Type': props.contentType || 'application/json' };
      body = JSON.stringify(props.payload);
    }

    httpOptions = { ...httpOptions, body };
  }

  httpOptions = { ...httpOptions, headers };

  return { httpOptions };
};

export const pwaHttpLogoutHandler = async () => {
  // await clearUserCookiesHandler();
  window.location.href = '/';
};
