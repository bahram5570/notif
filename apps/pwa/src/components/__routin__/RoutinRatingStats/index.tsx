import ChatIcon from '@assets/icons/message-icon.svg';
import StarIcon from '@assets/icons/star-1.svg';

import Typography from '@components/ui/Typography';

import { RoutinRatingStatsPropsType } from './type';

const RoutinRatingStats = ({ commentCount, rateAvg }: RoutinRatingStatsPropsType) => {
  const average = parseFloat(rateAvg.toFixed(1)).toString();

  return (
    <div className="flex  items-end justify-end gap-6">
      <div className="flex flex-row items-center justify-center gap-2">
        <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
          {commentCount.toString()}
        </Typography>
        <ChatIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Typography scale="Body" size="Medium" color="Surface_OnSurfaceVariant">
          {average}
        </Typography>
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
