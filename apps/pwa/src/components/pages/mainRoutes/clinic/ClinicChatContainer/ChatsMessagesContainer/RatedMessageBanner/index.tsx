import StarIcon from '@assets/icons/star.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { RATING_LIST } from '../../RatingContainer/RatingStars/constants';
import { RatedMessageBannerProps } from './types';

const RatedMessageBanner = ({ rate, description }: RatedMessageBannerProps) => {
  return (
    <div className="w-full rounded-xl px-2 py-3 flex flex-col items-end gap-3 mt-10 bg-impo_Primary_Primary">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center px-2 py-1 rounded-full bg-impo_White">
          <div className="flex items-center gap-1 pr-1">
            <Dark_Typography fontSize="Lable_Large" className="!h-5 text-impo_Black">
              {rate.toString()}
            </Dark_Typography>

            <StarIcon className="w-6 h-auto fill-impo_Yellow" />

            <div className="w-[1px] h-[20px] bg-impo_Pink_200 dark:bg-impo_Pink_700" />
          </div>

          <Dark_Typography fontSize="Body_Small" className="text-impo_Black">
            {RATING_LIST[rate - 1].script}
          </Dark_Typography>
        </div>

        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Primary_OnPrimary">
          امتیاز شما به این مشاوره
        </Dark_Typography>
      </div>

      <Dark_Typography fontSize="Lable_Small" className="text-impo_Primary_OnPrimary">
        {description}
      </Dark_Typography>
    </div>
  );
};

export default RatedMessageBanner;
