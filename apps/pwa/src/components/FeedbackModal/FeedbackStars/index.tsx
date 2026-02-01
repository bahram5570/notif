import StarIcon from '@assets/icons/star.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RATING_LIST } from './constants';
import { FeedbackStarsPropsType } from './type';

const FeedbackStars = ({ rate, rateHandler }: FeedbackStarsPropsType) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 py-4">
      <div className="flex items-center justify-between w-[220px] pb-2">
        {RATING_LIST.map((item) => (
          <StarIcon
            onClick={() => rateHandler(item.no)}
            className={`w-8 h-auto cursor-pointer ${item.no <= rate ? 'stroke-impo_Yellow fill-impo_Yellow' : 'stroke-impo_Surface_OutlineVariant fill-impo_Transparent'}`}
            key={item.no}
          />
        ))}
      </div>

      {rate === 0 && (
        <div className="flex justify-between w-[230px]">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
            {RATING_LIST[0].script}
          </CustomTypography>
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
            {RATING_LIST[4].script}
          </CustomTypography>
        </div>
      )}

      {rate > 0 && (
        <div className="flex justify-center w-[230px]">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_Large">
            {RATING_LIST[rate - 1].script}
          </CustomTypography>
        </div>
      )}
    </div>
  );
};

export default FeedbackStars;
