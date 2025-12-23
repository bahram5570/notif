import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { SlidesArrowTypes } from './types';

const SlidesArrow = ({ isNextSlide, onClick, isDisabled }: SlidesArrowTypes) => {
  return (
    <div
      onClick={onClick}
      className={`
                    min-w-10 
                    min-h-10 
                    sm:min-w-12 
                    sm:min-h-12 
                    flex 
                    items-center 
                    justify-center 
                    rounded-full 
                    cursor-pointer 
                    bg-impo_Surface_SurfaceVariant
                    ${!isNextSlide && '-scale-100'}
                    ${isDisabled && 'opacity-40 pointer-events-none'}
                `}
    >
      <ArrowBackIosRoundedIcon className="w-5 h-5 fill-impo_Surface_InverseSurface" />
    </div>
  );
};

export default SlidesArrow;
