import { useContext } from 'react';

import { ProfileContext } from '@providers/ProfileProvider/ProfileProviderContainer';

const useProfileData = () => {
  return useContext(ProfileContext);
};

export default useProfileData;
