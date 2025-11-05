import http from '@services/http';

import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { notFound } from 'next/navigation';

export const completeCacheService = async <T>(url: string) => {
  const { data, error } = await http<T>({
    url,
    method: 'GET',
    cache: 'force-cache',
    // revalidate: CACHE_REVALIDATE_TIME,
    revalidate: 30,
  });

  if (error) {
    await http<T>({
      url,
      method: 'GET',
      revalidate: 1,
      cache: 'force-cache',
    });

    // notFound();
  }

  return data;
};
