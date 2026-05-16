import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { NameSelectorEmptyProps } from './types';

const NameSelectorEmpty = ({ image, txt1, txt2, children }: NameSelectorEmptyProps) => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center">
      <CustomImage_NEW src={image} width={100} height={100} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center pt-3 pb-1">
        {txt1}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
        {txt2}
      </CustomTypography>

      {children && <>{children}</>}
    </div>
  );
};

export default NameSelectorEmpty;
