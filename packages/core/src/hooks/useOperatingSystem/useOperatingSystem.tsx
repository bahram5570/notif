import { useContext } from 'react';

import { OperatingSystemContext } from '../../providers/OperatingSystemProvider';

export const useOperatingSystem = () => {
  return useContext(OperatingSystemContext);
};
