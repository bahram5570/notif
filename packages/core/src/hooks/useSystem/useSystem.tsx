import { useContext } from 'react';

import { SystemContext } from '../../providers/SystemProvider/SystemProvider';

export const useSystem = () => {
  return useContext(SystemContext);
};
