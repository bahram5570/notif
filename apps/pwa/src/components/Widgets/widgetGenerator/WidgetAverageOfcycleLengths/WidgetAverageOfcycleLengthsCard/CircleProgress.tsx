import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CircleProgressProps } from './types';

const CircleProgress = ({ length, filledLength, centeralText, isPdfDownloading }: CircleProgressProps) => {
  const zeroPercent = 471;
  const hundredPercent = 71;
  const totalPercent = zeroPercent - hundredPercent;

  const filledPercent = filledLength / length;
  const resultPercent = -(totalPercent * filledPercent - zeroPercent);

  const sizes = { width: length < 0 ? '64px' : '112px', height: length < 0 ? '64px' : '112px' };

  return (
    <div className="relative -mt-1" style={{ ...sizes }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <CustomTypography
          fontSize="Title_Small"
          className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
        >
          {centeralText}
        </CustomTypography>
      </div>

      <svg viewBox="-21.25 -21.25 212.5 212.5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="-rotate-90">
        <circle
          r="75"
          cx="85"
          cy="85"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDashoffset={hundredPercent}
          fill="transparent"
          strokeDasharray="471px"
          className={`!stroke-impo_Neutral_Surface ${isPdfDownloading && ' dark:!stroke-impo_Neutral_OnSurface !stroke-impo_Neutral_Surface'}`}
        />

        <circle
          r="75"
          cx="85"
          cy="85"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDashoffset={resultPercent}
          fill="transparent"
          strokeDasharray="471px"
          className="!stroke-impo_Primary_Primary"
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
