import StarIcon from '@assets/icons/star.svg';

import Typography from '@components/ui/Typography';
import { RATING_LIST } from '@components/women/FeedbackModal/FeedbackStars/constants';
import useTheme from '@hooks/useTheme';

import { ReviewCommentPropsType } from './type';

const ReviewComment = ({ rate }: ReviewCommentPropsType) => {
  const { colors } = useTheme();
  const { description, rate: rateValue, title } = rate;
  return (
    <div
      className="w-full relative rounded-xl   px-2 py-3 flex flex-col items-end gap-3 mt-10  bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/images/commentBg.png'), linear-gradient(260.29deg, rgba(17,127,253,0.9), rgba(15,215,181,0.9))`,
      }}
    >
      <div className="relative z-10 w-full flex justify-between items-center">
        <div className="flex items-center px-2 py-1 rounded-full" style={{ backgroundColor: colors.White }}>
          <div className="flex items-center gap-1 pr-1">
            <Typography scale="Lable" size="Large" className="!h-5">
              {rateValue.toString()}
            </Typography>

            <StarIcon className="w-6 h-auto" style={{ fill: colors.Yellow }} />

            <div className="w-[1px] h-[20px]" style={{ backgroundColor: colors.Pink_200 }} />
          </div>

          <Typography scale="Body" size="Small">
            {RATING_LIST[rateValue - 1].script}
          </Typography>
        </div>

        <Typography scale="Lable" size="Medium" color="Neutral_Background">
          امتیاز شما به این روتین
        </Typography>
      </div>

      <Typography scale="Lable" size="Small" color="Neutral_Background">
        {description}
      </Typography>
    </div>
  );
};

export default ReviewComment;
