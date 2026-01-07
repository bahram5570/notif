import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ChallengeBannerPropsType } from './type';

const ChallengeBanner = ({ bannerText, bannerTitle }: ChallengeBannerPropsType) => {
  return (
    <div className="relative">
      <CustomImage src="/assets/images/bg-challenge.webp" />
      <div className="flex absolute top-0 w-full h-full justify-center items-center gap-1 flex-row-reverse">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Black">
          {bannerTitle}
        </Dark_Typography>
        <Dark_Typography fontSize="Title_Small" className="dark:text-impo_Pink_50 text-impo_Pink_900">
          {bannerText}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default ChallengeBanner;
