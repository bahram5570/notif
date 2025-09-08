import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { ChallengeBannerPropsType } from './type';

const ChallengeBanner = ({ bannerText, bannerTitle }: ChallengeBannerPropsType) => {
  return (
    <div className="relative">
      <CustomImage src="/assets/images/bg-challenge.webp" />
      <div className="flex absolute top-0 w-full h-full justify-center items-center gap-1 flex-row-reverse">
        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          {bannerTitle}
        </Typography>
        <Typography scale="Title" size="Small" color="Pink_800">
          {bannerText}
        </Typography>
      </div>
    </div>
  );
};

export default ChallengeBanner;
