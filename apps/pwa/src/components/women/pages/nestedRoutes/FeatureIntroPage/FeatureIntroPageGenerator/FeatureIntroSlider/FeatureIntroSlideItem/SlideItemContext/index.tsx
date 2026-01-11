import Dark_Typography from '@components/ui/Dark_Typography';

import { SlideItemContextPropsType } from './type';

const SlideItemContext = ({ title, description }: SlideItemContextPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2  px-4">
      <Dark_Typography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground text-center">
        {title}
      </Dark_Typography>
      <Dark_Typography fontSize="Body_Medium" className="text-center text-impo_Surface_InverseSurface">
        {description}
      </Dark_Typography>
    </div>
  );
};

export default SlideItemContext;
