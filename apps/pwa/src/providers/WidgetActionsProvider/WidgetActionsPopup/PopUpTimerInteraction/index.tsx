import { useEffect, useState } from 'react';

import CancelIcon from '@assets/icons/cancel.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import { PopUpTimerInteractionTypes } from './types';

const PopUpTimerInteraction = ({ data, timerInteractionCompleteHandler }: PopUpTimerInteractionTypes) => {
  const { colors } = useTheme();

  const { actionHandler } = useWidgetActions();
  const [progress, setProgress] = useState(100);

  const [canStartTimer, setCanStartTimer] = useState(false);

  const width = 326;
  const height = 64;
  const rx = 32;

  const perimeter = 2 * (width + height);

  const closeHandler = () => {
    timerInteractionCompleteHandler();
  };

  const onClick = () => {
    timerInteractionCompleteHandler();
    actionHandler(data.action);
  };

  useEffect(() => {
    if (!canStartTimer) return;
    const tickInterval = 30;
    const totalTicks = (data.second * 1000) / tickInterval;
    const decrement = 100 / totalTicks;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - decrement;
      });
    }, tickInterval);

    return () => clearInterval(interval);
  }, [data.second, canStartTimer]);

  useEffect(() => {
    if (progress === 0) {
      timerInteractionCompleteHandler();
    }
  }, [progress]);

  return (
    <div
      className="fixed  w-full p-2 z-50 mx-auto left-0 right-0 flex justify-center items-center animate-popUpTimer"
      style={{ maxWidth: MAX_SCREEN_WIDTH, bottom: FOOTER_HEIGTH + 5 }}
      onAnimationEnd={() => setCanStartTimer(true)}
    >
      <div className="relative " style={{ width, height }}>
        <div
          className=" rounded-full flex flex-row-reverse p-2  items-center gap-5 relative"
          style={{
            backgroundColor: colors.Neutral_Background,
          }}
        >
          <div className="flex flex-row-reverse gap-2" onClick={onClick}>
            <CustomImage src="/assets/images/mones.webp" width={40} height={40} />
            <div className="flex flex-col items-end gap-1">
              <Typography scale="Lable" size="Medium">
                {data.title}
              </Typography>
              <Typography scale="Lable" size="Small">
                {data.description}
              </Typography>
            </div>
          </div>

          <div className="w-8 h-8 flex justify-center items-center" onClick={closeHandler}>
            <CancelIcon className="w-5 h-auto" style={{ stroke: colors.Surface_OnSurfaceVariant }} />
          </div>
        </div>

        <svg
          fill="none"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x={1}
            y={1}
            width={width - 2}
            height={height - 8}
            rx={rx}
            stroke={'#A340FF'}
            strokeWidth={2}
            strokeDasharray={perimeter}
            strokeDashoffset={perimeter * (1 - progress / 100)}
            style={{ transition: 'stroke-dashoffset 0.05s linear' }} // smooth
          />
        </svg>
      </div>
    </div>
  );
};

export default PopUpTimerInteraction;
