import Cookies from 'js-cookie';

import { CacheTypes, HttpTypes, OptionsTypes } from './types';

const cacheOptionsFinder = (props: HttpTypes) => {
  let cacheOptions: CacheTypes = {};
  const cache = props.cache || 'no-store';

  if (props.cache === 'force-cache') {
    props.tags;
    cacheOptions = { cache };

    if (typeof props.revalidate !== 'undefined') {
      cacheOptions = { ...cacheOptions, revalidate: props.revalidate };
    }

    if (typeof props.tags !== 'undefined') {
      cacheOptions = { ...cacheOptions, tags: props.tags };
    }
  } else {
    cacheOptions = { cache };
  }

  return { cacheOptions };
};

export const applyOptions = async (props: HttpTypes) => {
  const { cacheOptions } = cacheOptionsFinder(props);

  let result: OptionsTypes = { method: props.method || 'GET' };
  result = props.contentType === 'multipart/form-data' ? { ...result } : { ...result, ...cacheOptions };

  let headers: object = {};

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

    result = { ...result, body };
  }

  let options: object = { method: result.method, headers };

  if (result.body) {
    options = { ...options, body: result.body };
  }

  if (result.method === 'GET') {
    if (result.cache === 'force-cache') {
      options = { ...options, next: { revalidate: result.revalidate, tags: result.tags } };
    } else if (result.cache === 'no-store') {
      options = { ...options, cache: 'no-store' };
    }
  }

  return { options };
};

export const clearCacheHandler = () => {
  Cookies.remove('user');
  window.location.href = '/';
};
