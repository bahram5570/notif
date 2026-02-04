import { applyOptions, clearCacheHandler } from './__utils__';

import { HttpResultTypes, HttpTypes } from './types';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

const http = async <T>(props: HttpTypes) => {
  const result: HttpResultTypes<T> = { data: undefined, error: undefined };
  const url = `${baseUrl}/${props.url}`;

  try {
    const { options } = await applyOptions(props);

    const res = await fetch(url, { cache: 'no-store', ...(options as any) });

    if (!res.ok) {
      const status = res.status;

      if (status === 401 || status === 403) {
        await clearCacheHandler();
      }

      throw new Error(res.statusText, { cause: status });
    }

    result.data = await res.json();
  } catch (er) {
    const error = er as Error;
    const cause = Number(error.cause);
    const status = isNaN(cause) ? 500 : cause;

    result.error = { message: error.message, status };
  }

  return result;
};

export default http;
