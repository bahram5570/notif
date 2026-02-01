import ArrowIcon from '@assets/icons/vector.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SignsNavigationProps } from './types';

const SignsNavigation = ({ slide, slideHandler, infoList }: SignsNavigationProps) => {
  const slideActionHandler = (isNext: boolean) => {
    if (isNext) {
      if (slide < infoList.length - 1) {
        slideHandler(slide + 1);
      }
    } else {
      if (slide > 0) {
        slideHandler(slide - 1);
      }
    }
  };

  return (
    // <div className="w-full flex items-center justify-between pb-1">
    <div className="w-full flex items-center justify-center h-12 pb-1">
      {/* <div className="h-12 w-8 flex items-center" onClick={() => slideActionHandler(true)}>
        <ArrowIcon
          className="w-2 h-auto"
          style={{ stroke: slide === infoList.length - 1 ? colors.Surface_Outline : colors.PrimaryWoman_Primary }}
        />
      </div> */}

      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        {infoList?.[slide].fullDateScript || ''}
      </CustomTypography>

      {/* <div className="h-12 w-8 flex items-center rotate-180" onClick={() => slideActionHandler(false)}>
        <ArrowIcon
          className="w-2 h-auto"
          style={{ stroke: slide === 0 ? colors.Surface_Outline : colors.PrimaryWoman_Primary }}
        />
      </div> */}
    </div>
  );
};

export default SignsNavigation;
