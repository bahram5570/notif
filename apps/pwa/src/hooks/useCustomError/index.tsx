import { useContext } from 'react';

import { ErrorContext } from '@providers/ErrorProvider';

const useCustomError = () => {
  return useContext(ErrorContext);
};

export default useCustomError;
