import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useSplashProgress from './__hooks__/useSplashProgress';
import { SplashContentsProgressProps } from './types';

const SplashContentsProgress = ({ onComplete, splashStatus }: SplashContentsProgressProps) => {
  const { colors } = useTheme();
  const { progressPercent } = useSplashProgress({ onComplete, splashStatus });

  return (
    <div className="flex flex-col gap-1">
      <Typography scale="Title" size="Small" color="Neutral_Background">{`${progressPercent}%`}</Typography>

      <div
        className="w-[140px] h-[8px] rounded-full p-[1px] overflow-hidden"
        style={{ backgroundColor: colors.Neutral_Background }}
      >
        <div
          className="w-full h-full rounded-full duration-100"
          style={{ backgroundColor: colors.PrimaryWoman_Primary, maxWidth: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default SplashContentsProgress;
