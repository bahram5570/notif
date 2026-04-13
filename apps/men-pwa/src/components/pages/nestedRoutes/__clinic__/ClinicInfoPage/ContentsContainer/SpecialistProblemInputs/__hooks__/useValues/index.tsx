import { useEffect, useState } from 'react';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ValuesHandlerTypes } from './types';

const useValues = () => {
  const [values, setValues] = useState({ text: '', fileName: '' });
  const { getQueryParams } = useQueryParamsHandler();

  useEffect(() => {
    const fileName = getQueryParams('fileName');
    const text = getQueryParams('text');

    if (fileName !== null && text !== null) {
      setValues({ fileName, text });
    }
  }, []);

  const valuesHandler: ValuesHandlerTypes = (value, name) => {
    if (name) {
      setValues({ ...values, [name]: value });
    }
  };

  return { values, valuesHandler };
};

export default useValues;
