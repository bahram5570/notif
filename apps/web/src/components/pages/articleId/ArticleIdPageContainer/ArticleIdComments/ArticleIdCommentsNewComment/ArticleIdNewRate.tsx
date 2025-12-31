import StarIcon from '@assets/icons/star.svg';

import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdNewRateTypes } from './types';

const ArticleIdNewRate = ({ rate, rateHandler }: ArticleIdNewRateTypes) => {
  const starList = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full flex items-center justify-center gap-3">
        {starList.map((no) => {
          const isSelected = no <= rate;

          return (
            <StarIcon
              key={no}
              onClick={() => rateHandler(no)}
              className={`
                          w-6 
                          cursor-pointer 
                          ${isSelected ? 'fill-impo_Yellow stroke-impo_Transparent' : 'fill-impo_Transparent stroke-impo_Surface_Outline'}
                        `}
            />
          );
        })}
      </div>

      <div className="w-fit flex justify-between gap-20">
        <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
          خیلی کم
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
          خیلی زیاد
        </CustomTypography>
      </div>
    </div>
  );
};

export default ArticleIdNewRate;
