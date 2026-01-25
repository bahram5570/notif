import { useState } from 'react';

const useShowErrorMessage = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const showErrorMessageHandler = (v: boolean) => {
    setShowErrorMessage(v);
  };

  return { showErrorMessage, showErrorMessageHandler };
};

export default useShowErrorMessage;
