import { useEffect, useState } from 'react';

import { OnchangeHandlerTypeHasName } from '@repo/core/components/ui/CustomTextareaInput';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

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

  const valuesHandler: OnchangeHandlerTypeHasName = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  return { values, valuesHandler };
};

export default useValues;
