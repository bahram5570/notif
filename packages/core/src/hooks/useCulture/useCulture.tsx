import { useContext } from 'react';

import { CultureConext } from '../../providers/CultureProvider/CultureContainer';

export const useCulture = () => {
  return useContext(CultureConext);
};
