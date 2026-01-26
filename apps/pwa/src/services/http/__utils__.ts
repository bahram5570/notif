import { deleteUserCookie, getUserCookie, setCultureCookie } from '@actions/cookie.actions';
import { CULTURE_INITIAL_VALUES } from '@providers/CultureProvider/constants';

import { HttpTypes, OptionsTypes } from './types';

const authTokenFinder = async () => {
  const user = await getUserCookie();
  const Authorization = user ? `Bearer ${user.token}` : undefined;

  return { Authorization };
};

export const applyOptions = async (props: HttpTypes) => {
  const { Authorization } = await authTokenFinder();

  let options: OptionsTypes = { method: props.method || 'GET' };

  let headers = {};
  headers = { ...headers, Authorization };

  if (props.method === 'POST' || props.method === 'PUT' || props.method === 'DELETE') {
    let body = undefined;

    if (props.contentType === 'multipart/form-data') {
      body = props.payload;
    } else {
      headers = { ...headers, 'Content-Type': props.contentType || 'application/json' };
      body = JSON.stringify(props.payload);
    }

    options = { ...options, body };
  }

  options = { ...options, headers };

  return { options };
};

export const clearCacheHandler = async () => {
  await deleteUserCookie();
  await setCultureCookie(CULTURE_INITIAL_VALUES);
  window.location.href = '/';
};
