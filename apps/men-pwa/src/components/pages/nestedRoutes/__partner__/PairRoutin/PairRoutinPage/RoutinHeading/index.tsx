import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RoutinHeadingProps } from './types';

const RoutinHeading = ({ image, description, title }: RoutinHeadingProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-5 pb-4">
      <CustomImage src={image} width={88} height={88} />

      <div className="flex flex-col items-end gap-2">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default RoutinHeading;
