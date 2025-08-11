import { OnboardingPageEnum } from '@providers/TrailonboardingProvider/enum';

import TrailonboardingQuestion from './TrailonboardingQuestion';
import TrailonboardingSlider from './TrailonboardingSlider';
import TrailonboardingWelcoming from './TrailonboardingWelcoming';
import { TrailonboardingPageGeneratorPropsType } from './type';

const TrailonboardingPageGenerator = ({ data, type, goToNext }: TrailonboardingPageGeneratorPropsType) => {
  let currentPage: JSX.Element | null = null;

  switch (type) {
    case OnboardingPageEnum.Welcome:
      currentPage = <TrailonboardingWelcoming data={data} goToNext={goToNext} />;
      break;
    case OnboardingPageEnum.Slider:
      currentPage = <TrailonboardingSlider data={data} goToNext={goToNext} />;
      break;
    case OnboardingPageEnum.Question:
      currentPage = <TrailonboardingQuestion data={data} goToNext={goToNext} />;
      break;
    // case OnboardingPageEnum.FinalPage:
    //   result = <TrailonboardingWelcoming data={data} />;
    //   break;
  }

  return currentPage === null ? <></> : <>{currentPage}</>;
};

export default TrailonboardingPageGenerator;
