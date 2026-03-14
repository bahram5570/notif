import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import OnboardingContext from './OnboardingContext';
import OnboardingImageSlider from './OnboardingImageSlider';
import OnboardingIntroFooter from './OnboardingIntroFooter';
import useStep from './__hooks__/useStep';
import { OnboardingIntroPropsType } from './type';

export const OnboardingIntro = ({ list, finalButton, submitHandler }: OnboardingIntroPropsType) => {
  const { clickHandler, lastIndex, currentIndex } = useStep({ finalButton, list, submitHandler });

  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-20 min-h-[100dvh] bg-impo_Neutral_Surface"
      style={{
        direction: 'rtl',
        paddingTop: `${HEADER_HEIGHT + 16}px`,
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
