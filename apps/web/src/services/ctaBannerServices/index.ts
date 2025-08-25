import http from '@services/http';

import { CraBannerItemTypes } from '@components/CtaBanner/types';

export const ctaBannerListService = async () => {
  const { data, error } = await http<{ items: CraBannerItemTypes[] }>({
    url: `support/article/cta`,
    method: 'GET',
    cache: 'no-store',
  });

  return { error, ctaData: data?.items };
};

export const ctaBannerService = async (name: string) => {
  const { data, error } = await http<{ items: CraBannerItemTypes[] }>({
    url: `support/article/cta?name=${name}`,
    method: 'GET',
    cache: 'no-store',
  });

  return { error, ctaData: data?.items?.[0] };
};
