import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SlideItemContextPropsType } from './type';

const SlideItemContext = ({ title, description }: SlideItemContextPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2  px-4">
      <CustomTypography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground text-center">
        {title}
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" className="text-center text-impo_Surface_InverseSurface">
        {description}
      </CustomTypography>
    </div>
  );
};

export default SlideItemContext;
