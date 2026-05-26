import { httpOptionsMaker } from './__utils__';

import { PwaHttpResultTypes, PwaHttpTypes } from './types';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

export const pwaHttp = async <T>(props: PwaHttpTypes) => {
  const result: PwaHttpResultTypes<T> = { data: undefined, error: undefined };
  const url = `${baseUrl}/${props.url}`;

  try {
    const { httpOptions } = await httpOptionsMaker(props);

    const res = await fetch(url, { cache: 'no-store', ...(httpOptions as any) });

    if (!res.ok) {
      throw new Error(res.statusText, { cause: res.status });
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
