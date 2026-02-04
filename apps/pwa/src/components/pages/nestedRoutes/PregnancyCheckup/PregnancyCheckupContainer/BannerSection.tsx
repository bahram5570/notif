import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { BannerSectionPropsType } from './type';

const BannerSection = ({ banner }: BannerSectionPropsType) => {
  return (
    <div className="rounded-xl flex flex-row-reverse items-center pl-2 pt-2 mt-4 bg-impo_Yellow_300">
      <CustomTypography fontSize="Body_Medium" className="px-3 mb-2 text-impo_Surface_InverseSurface">
        {banner}
      </CustomTypography>
      <CustomImage src="/assets/images/banner-checkupPregnancy.webp" />
    </div>
  );
};

export default BannerSection;
