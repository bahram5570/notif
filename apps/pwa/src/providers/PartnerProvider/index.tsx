'use client';

import { createContext } from 'react';

import useGetData from './__hooks__/useGetData';
import { PartnerContextTypes, PartnerProviderPropsTypes } from './type';

export const PartnerContext = createContext<PartnerContextTypes>({ partnerData: undefined, isLoading: false });

const PartnerProvider = ({ children }: PartnerProviderPropsTypes) => {
  const { data, isLoading } = useGetData();

  return <PartnerContext.Provider value={{ partnerData: data, isLoading }}>{children}</PartnerContext.Provider>;
};

export default PartnerProvider;
