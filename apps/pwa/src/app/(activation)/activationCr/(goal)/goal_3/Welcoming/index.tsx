import WelcomingIcon from '@assets/icons/welcoming.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import ProgressBar from './ProgressBar';
import useWelcomingSteps from './__hooks__/useWelcomingSteps';
import { StepsList } from './__hooks__/useWelcomingSteps/constants';

const Welcoming = () => {
  const { steps } = useWelcomingSteps();

  if (steps === StepsList.FINISH) {
    return <></>;
  }

  const containerOpacity = { [StepsList.START]: 1, [StepsList.FADE_IN]: 1, [StepsList.FADE_OUT]: 0 }[steps];
  const contentsOpacity = { [StepsList.START]: 0, [StepsList.FADE_IN]: 1, [StepsList.FADE_OUT]: 1 }[steps];

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, opacity: containerOpacity }}
      className="fixed top-0 left-0 right-0 h-full min-h-[100dvh] mx-auto duration-1000 bg-impo_Neutral_Background z-40"
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center px-10 duration-1000"
        style={{ opacity: contentsOpacity }}
      >
        <WelcomingIcon />

        <Dark_Typography fontSize="Title_Large" className="text-impo_Neutral_OnBackground py-2">
          ایمپویی عزیز سلام
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnSurface text-center">
          ایمپو یعنی تو مهم هستی. ما اینجا تلاش می کنیم تا حال جسمی و روحی خوبی داشته باشی و بتونی در زمان قاعدگی یا
          بارداری بیشتر مراقب خودت باشی
        </Dark_Typography>

        <ProgressBar />
      </div>
    </div>
  );
};

export default Welcoming;
