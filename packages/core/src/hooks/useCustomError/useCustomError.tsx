import { useContext } from 'react';

import { ErrorContext } from '../../providers/ErrorProvider/ErrorProvider';

export const useCustomError = () => {
  return useContext(ErrorContext);
};
