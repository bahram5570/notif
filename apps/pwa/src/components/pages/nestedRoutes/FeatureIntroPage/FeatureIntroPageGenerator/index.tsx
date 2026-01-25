import { OnboardingPageEnum } from '@providers/__featureIntro__/FeatureIntroProvider/enum';

import FeatureIntroFinalPage from './FeatureIntroFinalPage';
import FeatureIntroQuestion from './FeatureIntroQuestion';
import FeatureIntroSlider from './FeatureIntroSlider';
import FeatureIntroWelcoming from './FeatureIntroWelcoming';
import { FeatureIntroPageGeneratorPropsType } from './type';

const FeatureIntroPageGenerator = ({ data, goToNext, type }: FeatureIntroPageGeneratorPropsType) => {
  let currentPage: JSX.Element | null = null;

  switch (type) {
    case OnboardingPageEnum.Welcome:
      currentPage = <FeatureIntroWelcoming data={data} goToNext={goToNext} />;
      break;
    case OnboardingPageEnum.Slider:
      currentPage = <FeatureIntroSlider data={data} goToNext={goToNext} />;
      break;
    case OnboardingPageEnum.Question:
      currentPage = <FeatureIntroQuestion data={data} goToNext={goToNext} />;
      break;
    case OnboardingPageEnum.FinalPage:
      currentPage = <FeatureIntroFinalPage data={data} />;
      break;
  }

  return currentPage === null ? <></> : <>{currentPage}</>;
};

export default FeatureIntroPageGenerator;
