import { useContext } from 'react';

import { OperatingSystemContext } from '@providers/OperatingSystemProvider/OperatingSystemProviderContainer';

const useOperatingSystem = () => {
  return useContext(OperatingSystemContext);
};

export default useOperatingSystem;
