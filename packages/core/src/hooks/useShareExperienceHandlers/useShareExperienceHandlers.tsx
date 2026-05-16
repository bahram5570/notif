import { useContext } from 'react';

import { ShareExperienceContext } from '../../providers/ShareExperienceProvider/ShareExperienceProvider';

export const useShareExperienceHandlers = () => {
  const { getZIndex, increaseZIndex, accessOptionHandler } = useContext(ShareExperienceContext);

  return { getZIndex, increaseZIndex, accessOptionHandler };
};
