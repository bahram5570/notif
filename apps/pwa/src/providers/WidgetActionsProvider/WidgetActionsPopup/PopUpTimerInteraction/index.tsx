import { useEffect } from 'react';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import PopUpTimerInteractionContent from './PopUpTimerInteractionContent';
import PopUpTimerInteractionStroke from './PopUpTimerInteractionStroke';
import useProgress from './__hooks__/useProgress';
import { HEIGHT, WIDTH } from './constants';
import { PopUpTimerInteractionTypes } from './types';

const PopUpTimerInteraction = ({ data, actionCompleteHandler }: PopUpTimerInteractionTypes) => {
  const { progress, startTimerHandler } = useProgress({ second: data.second });

  const width = WIDTH;
  const height = HEIGHT;

  useEffect(() => {
    if (progress === 0) {
      actionCompleteHandler();
    }
  }, [progress]);

  return (
    <div
      className="fixed w-full p-2 z-50 mx-auto left-0 right-0 flex justify-center items-center animate-fade-in "
      style={{ maxWidth: MAX_SCREEN_WIDTH, bottom: FOOTER_HEIGTH + 30 }}
      // onAnimationEnd={startTimerHandler}
    >
      <div className="relative " style={{ width, height }}>
        <PopUpTimerInteractionContent actionCompleteHandler={actionCompleteHandler} data={data} />

        <PopUpTimerInteractionStroke progress={progress} />
      </div>
    </div>
  );
};

export default PopUpTimerInteraction;
