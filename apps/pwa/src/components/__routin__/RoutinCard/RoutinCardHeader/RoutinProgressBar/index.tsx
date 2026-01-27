import Dark_Typography from '@components/ui/Dark_Typography';

import { RoutinProgressBarPropsType } from './type';

const RoutinProgressBar = ({ completeRatio, completeTitle }: RoutinProgressBarPropsType) => {
  const percentage = completeRatio * 100;
  const isComplete = percentage === 100;

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <Dark_Typography
        fontSize="Lable_Small"
        className="text-impo_Surface_InverseSurface dark:text-impo_Surface_InverseOnSurface"
      >
        {completeTitle}
      </Dark_Typography>
      <div
        className="w-full rounded-full h-[6px] bg-impo_Neutral_Background dark:bg-impo_White"
        style={{
          transform: `rotate(180deg)`,
        }}
      >
        <div
          className={` h-full rounded-full transition-all duration-300 ${isComplete ? 'bg-impo_Success_Success' : 'bg-impo_Warning_Warning'}`}
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default RoutinProgressBar;
