'use client';

import { addIdAttrs } from '@utils/scripts';

import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import useWelcomingSteps from './__hooks__/useWelcomingSteps';
import { StepsList } from './__hooks__/useWelcomingSteps/constants';
import { onCompleteType } from './__hooks__/useWelcomingSteps/types';

const Welcoming = ({ onComplete }: { onComplete?: onCompleteType }) => {
  const { steps } = useWelcomingSteps(onComplete);

  if (steps === StepsList.FINISH) {
    return <></>;
  }

  const showTitle = steps >= StepsList.SHOW_TITLE;
  const showSubTitle = steps >= StepsList.SHOW_SUBTITLE;

  return (
    <>
      <div
        {...addIdAttrs('welcoming')}
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        className="fixed top-0 left-0 right-0 bottom-0 h-[100dvh] flex flex-col items-center gap-2 px-5 pt-[370px] mx-auto"
      >
        <Dark_Typography
          fontSize="Title_Medium"
          className={`
                      text-center
                      text-impo_Neutral_OnBackground
                      ${showTitle ? 'opacity-100' : 'opacity-0'}
                      ${steps === StepsList.START ? 'duration-0' : 'duration-1000'}
                    `}
        >
          همراه عزیز ایمپو سلام!
        </Dark_Typography>

        <Dark_Typography
          fontSize="Body_Large"
          className={`
                      text-center
                      text-impo_Neutral_OnBackground
                      ${showSubTitle ? 'opacity-100' : 'opacity-0'}
                      ${steps === StepsList.START ? 'duration-0' : 'duration-1000'}
                    `}
        >
          از اینکه به جمع ایمپویی‌ها پیوستی و برای مراقبت از خودت اپلیکیشن ایمپو رو نصب کردی، خوشحالیم&#128525;
        </Dark_Typography>
      </div>
    </>
  );
};

export default Welcoming;
