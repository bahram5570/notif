import { useState } from 'react';

const useDiscountCode = () => {
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [code, setCode] = useState('');

  const codeHandler = (v: string) => {
    setCode(v);
  };

  const toggleShowHandler = () => {
    setShowDiscountInput(!showDiscountInput);
    setCode('');
  };

  return { showDiscountInput, toggleShowHandler, code, codeHandler };
};

export default useDiscountCode;
