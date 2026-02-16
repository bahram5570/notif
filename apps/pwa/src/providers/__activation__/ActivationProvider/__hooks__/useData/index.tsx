import { useEffect, useState } from 'react';

import { ActivationDataTypes } from '@services/activationServices/types';

import useCustomError from '@hooks/useCustomError';

import { UseDataProps } from './types';

const useData = ({ questionsData, errorCode }: UseDataProps) => {
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

export default useData;
