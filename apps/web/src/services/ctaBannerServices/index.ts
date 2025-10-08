import http from '@services/http';

import { CraBannerItemTypes } from '@components/CtaBanner/types';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';

export const ctaBannerListService = async () => {
  const { data, error } = await http<{ items: CraBannerItemTypes[] }>({
    url: `support/article/cta`,
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
  });

  return { error, ctaData: data?.items };
};

export const ctaBannerService = async (name: string) => {
  const { data, error } = await http<{ items: CraBannerItemTypes[] }>({
    url: `support/article/cta?name=${name}`,
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
  });

  return { error, ctaData: data?.items?.[0] };
};
