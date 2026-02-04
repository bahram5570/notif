import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ChallengeBannerPropsType } from './type';

const ChallengeBanner = ({ bannerText, bannerTitle }: ChallengeBannerPropsType) => {
  return (
    <div className="relative">
      <CustomImage src="/assets/images/bg-challenge.webp" />
      <div className="flex absolute top-0 w-full h-full justify-center items-center gap-1 flex-row-reverse">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Black">
          {bannerTitle}
        </CustomTypography>
        <CustomTypography fontSize="Title_Small" className="dark:text-impo_Pink_50 text-impo_Pink_900">
          {bannerText}
        </CustomTypography>
      </div>
    </div>
  );
};

export default ChallengeBanner;
