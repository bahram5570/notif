import ChatIcon from '@assets/shared/icons/message-icon.svg';
import StarIcon from '@assets/shared/icons/star-1.svg';

import { CustomTypography } from '../../ui/CustomTypography';
import { RoutinRatingStatsPropsType } from './types';

export const RoutinRatingStats = ({ commentCount, rateAvg }: RoutinRatingStatsPropsType) => {
  const average = parseFloat(rateAvg.toFixed(1)).toString();

  return (
    <div className="flex  items-end justify-end gap-6">
      <div className="flex flex-row items-center justify-center gap-2">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
          {commentCount.toString()}
        </CustomTypography>

        <ChatIcon className="w-5 h-5" />
      </div>

      <div className="flex flex-row items-center justify-center gap-2">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
          {average}
        </CustomTypography>

        <StarIcon className="w-5 h-auto" style={{ fill: '#FFCF31' }} />
      </div>
    </div>
  );
};
