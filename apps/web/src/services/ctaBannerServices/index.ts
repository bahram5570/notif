import http from '@services/http';

import { CraBannerItemTypes } from '@components/CtaBanner/types';

export const ctaBannerListService = async () => {
  const { data, error } = await http<{ items: CraBannerItemTypes[] }>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/cta`,
  });

  return { error, ctaData: data?.items };
};

export const ctaBannerService = async (name: string) => {
  const { data, error } = await http<{ items: CraBannerItemTypes[] }>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/cta?name=${name}`,
  });

  return { error, ctaData: data?.items?.[0] };
};
