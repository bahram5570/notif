import { useContext } from 'react';

import { CultureConext } from '../../providers/CultureProvider/CultureProvider';

export const useCulture = () => {
  return useContext(CultureConext);
};
