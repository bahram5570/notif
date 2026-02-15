import { useContext } from 'react';

import { OverlayIndexContext } from '@providers/__shareExperience__/OverlayIndexProvider';

const useOverlayIndex = () => {
  return useContext(OverlayIndexContext);
};

export default useOverlayIndex;
