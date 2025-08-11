import { FC } from 'react';
import StarIcon from '@assets/icons/star.svg'

interface StarRatingProps {
    rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon
                    key={index}
                    className={`w-[16px] h-[16px] ${index <= rating ? 'fill-[#FFCC00]' : 'fill-[#D0D0D0]'
                        }`}
                />
            ))}
        </div>
    );
};

export default StarRating;
