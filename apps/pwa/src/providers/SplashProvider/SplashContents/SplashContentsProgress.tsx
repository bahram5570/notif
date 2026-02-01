import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useSplashProgress from './__hooks__/useSplashProgress';
import { SplashContentsProgressProps } from './types';

const SplashContentsProgress = ({ splashStatushHandler, splashStatus }: SplashContentsProgressProps) => {
  const { progressPercent } = useSplashProgress({ splashStatushHandler, splashStatus });

  return (
    <div className="flex flex-col gap-1">
      <CustomTypography fontSize="Title_Small" className="text-impo_White">{`${progressPercent}%`}</CustomTypography>

      <div className="w-[140px] h-[8px] rounded-full p-[1px] bg-impo_White overflow-hidden">
        <div
          style={{ maxWidth: `${progressPercent}%` }}
          className="w-full h-full rounded-full duration-100 bg-impo_Primary_Primary"
        />
      </div>
    </div>
  );
};

export default SplashContentsProgress;
