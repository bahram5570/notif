// useValues.ts
import { useState } from 'react';

const useValues = () => {
  const [value, setValue] = useState<string>('');

  const valuesHandler = (text: string) => {
    setValue(text);
  };

  return { value, valuesHandler };
};

export default useValues;
