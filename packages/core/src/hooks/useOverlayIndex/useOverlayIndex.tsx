import { useContext } from 'react';

import { OverlayIndexContext } from '../../providers/OverlayIndexProvider/OverlayIndexProvider';

export const useOverlayIndex = () => {
  return useContext(OverlayIndexContext);
};
