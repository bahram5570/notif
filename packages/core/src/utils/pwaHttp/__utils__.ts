// @ts-ignore
import * as actions from '@actions/userCookies.actions';

import { PwaHttpOptionsTypes, PwaHttpTypes } from './types';

export const httpOptionsMaker = async (props: PwaHttpTypes) => {
  const user = await actions.getUserCookie();
  const Authorization = user ? `Bearer ${user.token}` : undefined;

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
  await actions.clearUserCookiesHandler();
  window.location.href = '/';
};
