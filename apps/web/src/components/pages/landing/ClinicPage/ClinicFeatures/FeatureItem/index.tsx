import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { FeatureItemProps } from './types';

const FeatureItem = ({ image, title, description, imageDark }: FeatureItemProps) => {
  return (
    <div className="flex items-center py-4 px-3 lg:px-0 gap-x-[16px]">
      {/* light */}
      <CustomImage alt={title} height={1000} width={1000} src={image} className="w-[64px] h-auto dark:hidden block" />
      {/* dark */}
      <CustomImage
        alt={title}
        height={1000}
        width={1000}
        src={imageDark}
        className="w-[64px] h-auto dark:block hidden"
      />
      <div className="grid gap-y-2">
        <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
        <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default FeatureItem;
