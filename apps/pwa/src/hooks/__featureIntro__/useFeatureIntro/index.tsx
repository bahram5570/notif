import { useContext } from 'react';

import { FeatureIntroContext } from '@providers/__featureIntro__/FeatureIntroProvider';

const useFeatureIntro = () => {
  return useContext(FeatureIntroContext);
};

export default useFeatureIntro;
