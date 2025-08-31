import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RoutinProgressBarPropsType } from './type';

const RoutinProgressBar = ({ completeRatio, completeTitle }: RoutinProgressBarPropsType) => {
  const { colors } = useTheme();

  const percentage = completeRatio * 100;
  const isComplete = percentage === 100;

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <Typography scale="Body" size="Large" color="Surface_InverseSurface">
        {completeTitle}
      </Typography>
      <div
        className="w-full rounded-full h-[6px]"
        style={{
          backgroundColor: colors.Neutral_Background,
          transform: `rotate(180deg)`,
        }}
      >
        <div
          className=" h-1 rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: isComplete ? colors.Success_Success : colors.Warning_Warning,
          }}
        ></div>
      </div>
    </div>
  );
};

export default RoutinProgressBar;
