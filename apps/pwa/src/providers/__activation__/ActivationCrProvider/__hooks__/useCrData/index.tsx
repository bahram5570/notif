import { useEffect, useState } from 'react';

import { ActivationDataTypes } from '@services/activationServices/types';

import { useCustomError } from '@repo/core/hooks/useCustomError';

import { UseCrDataProps } from './types';

const useCrData = ({ questionsData, errorCode }: UseCrDataProps) => {
  const [data, setData] = useState<ActivationDataTypes>({ question: {}, reward: {} });
  const { onError } = useCustomError();

  useEffect(() => {
    if (questionsData && !errorCode) {
      setData(questionsData);
    }

    if (errorCode) {
      onError('server');
    }
  }, [questionsData, errorCode]);

  return { data };
};

export default useCrData;
