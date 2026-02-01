import StarIcon from '@assets/icons/star.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RATING_LIST } from '@components/FeedbackModal/FeedbackStars/constants';

import { ReviewCommentPropsType } from './type';

const ReviewComment = ({ rate }: ReviewCommentPropsType) => {
  const { description, rate: rateValue, title } = rate;
  return (
    <div
      className="w-full relative rounded-xl   px-2 py-3 flex flex-col items-end gap-3 mt-10  bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/images/commentBg.png'), linear-gradient(260.29deg, rgba(17,127,253,0.9), rgba(15,215,181,0.9))`,
      }}
    >
      <div className="relative z-10 w-full flex justify-between items-center">
        <div className="flex items-center px-2 py-1 rounded-full bg-impo_White">
          <div className="flex items-center gap-1 pr-1">
            <CustomTypography fontSize="Lable_Large" className="!h-5 text-impo_Black">
              {rateValue.toString()}
            </CustomTypography>

            <StarIcon className="w-6 h-auto fill-impo_Yellow" />

            <div className="w-[1px] h-[20px] bg-impo_Pink_200 dark:bg-impo_Pink_700" />
          </div>

          <CustomTypography fontSize="Body_Small" className="text-impo_Black">
            {RATING_LIST[rateValue - 1].script}
          </CustomTypography>
        </div>
        <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
          امتیاز شما به این روتین
        </CustomTypography>
      </div>
      <CustomTypography fontSize="Lable_Small" className="text-impo_White">
        {description}
      </CustomTypography>
    </div>
  );
};

export default ReviewComment;
