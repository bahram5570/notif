'use client';

import { createContext, useState } from 'react';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import { ACTIVATION_PAYLOAD_VALUES, ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import useActivationBackQuery from '@hooks/__activation__/useActivationBackQuery';

import useActivationRouteProtection from './__hooks__/useActivationRouteProtection';
import useData from './__hooks__/useData';
import { ActivationProviderProps, ActivationTypes } from './types';

export const ActivationContext = createContext<ActivationTypes>({
  data: null,
  payloadHandler: () => {},
  payload: ACTIVATION_PAYLOAD_VALUES,
});

const ActivationProvider = ({ children, questionsData, errorCode }: ActivationProviderProps) => {
  if (typeof window === 'undefined') {
    return <></>;
  }

  const { data } = useData({ errorCode, questionsData });
  const [payload, setPayload] = useState(ACTIVATION_PAYLOAD_VALUES);

  const payloadHandler: PayloadHandlerTypes = (v) => {
    setPayload({ ...payload, ...v });
  };

  useActivationBackQuery({ queryName: ACTIVATION_REWARD_QUERY_NAME });
  useActivationRouteProtection();

  return (
    <ActivationContext.Provider value={{ payload, payloadHandler, data }}>
      <>{children}</>
    </ActivationContext.Provider>
  );
};

export default ActivationProvider;
