import StarIcon from '@assets/icons/star-1.svg';

import useTheme from '@hooks/useTheme';

import { CommentRatePropsType } from './type';

const CommentRate = ({ rate }: CommentRatePropsType) => {
  const { colors } = useTheme();
  const rateValue = rate.toFixed();
  return (
    <div className="flex gap-1 flex-row-reverse">
      {Array.from({ length: 5 }, (_, i) => {
        const ratingValue = i + 1;
        return (
          <StarIcon
            key={i}
            className={`w-4 h-4 `}
            style={{ fill: ratingValue <= Number(rateValue) ? '#FFCC00' : colors.Surface_OutlineVariant }}
          />
        );
      })}
    </div>
  );
};

export default CommentRate;
