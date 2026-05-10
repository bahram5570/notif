import StarIcon from '@assets/shared/icons/star.svg';
import { RATING_LIST } from '@repo/core/components/clinic';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RatedMessageBannerProps } from './types';

const RatedMessageBanner = ({ rate, description }: RatedMessageBannerProps) => {
  return (
    <div className="w-full rounded-xl px-2 py-3 flex flex-col items-end gap-3 mt-10 bg-impo_PrimaryMan_PrimaryMan">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center px-2 py-1 rounded-full bg-impo_White">
          <div className="flex items-center gap-1 pr-1">
            <CustomTypography fontSize="Lable_Large" className="!h-5 text-impo_Black">
              {rate.toString()}
            </CustomTypography>

            <StarIcon className="w-6 h-auto fill-impo_Yellow" />

            <div className="w-[1px] h-[20px] bg-impo_Blue_200 dark:bg-impo_Blue_700" />
          </div>

          <CustomTypography fontSize="Body_Small" className="text-impo_Black">
            {RATING_LIST[rate - 1].script}
          </CustomTypography>
        </div>

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_OnPrimary">
          امتیاز شما به این مشاوره
        </CustomTypography>
      </div>

      <CustomTypography fontSize="Lable_Small" className="text-impo_Primary_OnPrimary">
        {description}
      </CustomTypography>
    </div>
  );
};

export default RatedMessageBanner;
