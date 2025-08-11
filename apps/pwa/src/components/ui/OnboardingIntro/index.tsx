import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import OnboardingContext from './OnboardingContext';
import OnboardingImageSlider from './OnboardingImageSlider';
import OnboardingIntroFooter from './OnboardingIntroFooter';
import useStep from './__hooks__/useStep';
import { OnboardingIntroPropsType } from './type';

const OnboardingIntro = ({ list, finalButton, submitHandler }: OnboardingIntroPropsType) => {
  const { colors } = useTheme();
  const { clickHandler, lastIndex, currentIndex } = useStep({ finalButton, list, submitHandler });

  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-20 min-h-[100dvh]"
      style={{
        direction: 'rtl',
        paddingTop: `${HEADER_HEIGHT + 16}px`,
        backgroundColor: colors.Surface_SurfaceVariant,
      }}
    >
      <OnboardingImageSlider currentIndex={currentIndex} list={list} />

      <OnboardingContext description={list[currentIndex].description} title={list[currentIndex].title} />

      <OnboardingIntroFooter
        clickHandler={clickHandler}
        currentIndex={currentIndex}
        finalButton={finalButton}
        lastIndex={lastIndex}
      />
    </div>
  );
};

export default OnboardingIntro;
