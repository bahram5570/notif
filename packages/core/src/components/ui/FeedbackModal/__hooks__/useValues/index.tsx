import { useState } from 'react';

const useValues = () => {
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState('');

  const rateHandler = (v: number) => {
    setRate(v);
  };

  const descriptionHandler = (v: string) => {
    setDescription(v);
  };

  return { rate, rateHandler, description, descriptionHandler };
};

export default useValues;
