import StarIcon from '@assets/icons/star.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import { RATING_LIST } from '@components/women/FeedbackModal/FeedbackStars/constants';

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
            <Dark_Typography fontSize="Lable_Large" className="!h-5 text-impo_Black">
              {rateValue.toString()}
            </Dark_Typography>

            <StarIcon className="w-6 h-auto fill-impo_Yellow" />

            <div className="w-[1px] h-[20px] bg-impo_Pink_200 dark:bg-impo_Pink_700" />
          </div>

          <Dark_Typography fontSize="Body_Small" className="text-impo_Black">
            {RATING_LIST[rateValue - 1].script}
          </Dark_Typography>
        </div>
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_White">
          امتیاز شما به این روتین
        </Dark_Typography>
      </div>
      <Dark_Typography fontSize="Lable_Small" className="text-impo_White">
        {description}
      </Dark_Typography>
    </div>
  );
};

export default ReviewComment;
