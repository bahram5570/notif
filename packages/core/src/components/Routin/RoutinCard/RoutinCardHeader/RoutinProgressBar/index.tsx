import { CustomTypography } from '../../../../ui/CustomTypography';
import { RoutinProgressBarPropsType } from './types';

const RoutinProgressBar = ({ completeRatio, completeTitle }: RoutinProgressBarPropsType) => {
  const percentage = completeRatio * 100;
  const isComplete = percentage === 100;

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <CustomTypography
        fontSize="Lable_Small"
        className="text-impo_Surface_InverseSurface dark:text-impo_Surface_InverseOnSurface"
      >
        {completeTitle}
      </CustomTypography>

      <div
        style={{ transform: `rotate(180deg)` }}
        className="w-full rounded-full h-[6px] bg-impo_Neutral_Background dark:bg-impo_White"
      >
        <div
          style={{ width: `${percentage}%` }}
          className={` h-full rounded-full transition-all duration-300 ${isComplete ? 'bg-impo_Success_Success' : 'bg-impo_Warning_Warning'}`}
        />
      </div>
    </div>
  );
};

export default RoutinProgressBar;
