import { pwaHttp } from '@repo/core/utils/pwaHttp';

import { FetchSelectNameActivationTypes, FetchSelectNameTypes } from './types';

export const fetchSelectNameActivation = async () => {
  return await pwaHttp<FetchSelectNameActivationTypes>({ url: 'feature/babyname/activation' });
};

export const fetchSelectName = async () => {
  return await pwaHttp<FetchSelectNameTypes>({ url: 'feature/babyname/data' });
};
