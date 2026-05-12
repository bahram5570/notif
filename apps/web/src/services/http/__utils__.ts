import Cookies from 'js-cookie';

import { HttpTypes, OptionsTypes } from './types';

const cacheOptionsFinder = (props: HttpTypes) => {
  const isGetMethod = props.method === undefined || props.method === 'GET';
  if (!isGetMethod) {
    return {};
  }

  let next = {};
  let cacheOptions = {};

  if (props.tags !== undefined) {
    next = { ...next, tags: props.tags };
  }

  if (props.cache === 'force-cache') {
    if (props.revalidate !== undefined) {
      next = { ...next, revalidate: props.revalidate };
    }
  } else if (props.cache === 'no-store') {
    cacheOptions = { cache: props.cache };
  }

  cacheOptions = { ...cacheOptions, next };

  return cacheOptions;
};

export const applyOptions = async (props: HttpTypes) => {
  const cacheOptions = cacheOptionsFinder(props);

  let options: OptionsTypes = { method: props.method || 'GET' };
  options = props.contentType === 'multipart/form-data' ? { ...options } : { ...options, ...cacheOptions };

  let headers: HeadersInit = {};

  if (props.method === 'POST' || props.method === 'PUT') {
    let body = undefined;

    if (props.contentType !== 'multipart/form-data') {
      headers = { ...headers, 'Content-Type': props.contentType || 'application/json' };
    }

    if (props.contentType === 'multipart/form-data') {
      body = props.payload;
    } else {
      body = JSON.stringify(props.payload);
    }

    options = { ...options, body };
  }

  options = { ...options, headers };

  return options as unknown as RequestInit;
};

export const clearCacheHandler = () => {
  Cookies.remove('user');
  window.location.href = '/';
};
