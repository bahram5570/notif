import ChatIcon from '@assets/icons/message-icon.svg';
import StarIcon from '@assets/icons/star-1.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { RoutinRatingStatsPropsType } from './type';

const RoutinRatingStats = ({ commentCount, rateAvg }: RoutinRatingStatsPropsType) => {
  const average = parseFloat(rateAvg.toFixed(1)).toString();

  return (
    <div className="flex  items-end justify-end gap-6">
      <div className="flex flex-row items-center justify-center gap-2">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
          {commentCount.toString()}
        </Dark_Typography>
        <ChatIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
          {average}
        </Dark_Typography>
        <StarIcon
          className="w-5 h-auto"
          style={{
            fill: '#FFCF31',
          }}
        />
      </div>
    </div>
  );
};

export default RoutinRatingStats;
