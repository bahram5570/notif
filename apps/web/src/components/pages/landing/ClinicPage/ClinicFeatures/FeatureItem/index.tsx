import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { FeatureItemProps } from './types';

const FeatureItem = ({ image, title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-center py-4 px-3 lg:px-0 gap-x-[16px]">
      <CustomImage alt={title} height={1000} width={1000} src={image} className="w-[64px] h-auto" />
      <div className="grid gap-y-2">
        <CustomTypography fontSize="Lable_Large">{title}</CustomTypography>
        <CustomTypography fontSize="Body_Small">{description}</CustomTypography>
      </div>
    </div>
  );
};

export default FeatureItem;
