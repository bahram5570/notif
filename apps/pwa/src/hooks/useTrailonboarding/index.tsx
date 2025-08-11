import { useContext } from 'react';

import { TrailonboardingContext } from '@providers/TrailonboardingProvider';

const useTrailonboarding = () => {
  return useContext(TrailonboardingContext);
};

export default useTrailonboarding;
