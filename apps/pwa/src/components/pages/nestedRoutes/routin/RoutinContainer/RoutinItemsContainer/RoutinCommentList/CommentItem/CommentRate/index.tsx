import StarIcon from '@assets/icons/star-1.svg';

import { CommentRatePropsType } from './type';

const CommentRate = ({ rate }: CommentRatePropsType) => {
  const rateValue = rate.toFixed();
  return (
    <div className="flex gap-1 flex-row-reverse">
      {Array.from({ length: 5 }, (_, i) => {
        const ratingValue = i + 1;
        return (
          <StarIcon
            key={i}
            className={`w-4 h-4 ${ratingValue <= Number(rateValue) ? 'fill-impo_Yellow' : 'fill-impo_Surface_OutlineVariant'}`}
          />
        );
      })}
    </div>
  );
};

export default CommentRate;
