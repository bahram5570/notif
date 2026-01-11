import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { BannerSectionPropsType } from './type';

const BannerSection = ({ banner }: BannerSectionPropsType) => {
  return (
    <div className="rounded-xl flex flex-row-reverse items-center pl-2 pt-2 mt-4 bg-impo_Yellow_300">
      <Dark_Typography fontSize="Body_Medium" className="px-3 mb-2 text-impo_Surface_InverseSurface">
        {banner}
      </Dark_Typography>
      <CustomImage src="/assets/images/banner-checkupPregnancy.webp" />
    </div>
  );
};

export default BannerSection;
