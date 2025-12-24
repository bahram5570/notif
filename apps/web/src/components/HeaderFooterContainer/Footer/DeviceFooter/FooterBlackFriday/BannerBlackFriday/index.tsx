import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { BLACKFRIDAYLANDINGLINK } from './constants';

const BannerBlackFriday = () => {
  return (
    <div
      className="fixed w-full h-[64px] bottom-0 z-50 flex items-center justify-between px-4 py-3"
      style={{
        backgroundImage: 'url(/assets/images/blackFriday/footerBanner.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div>
        <CustomTypography fontSize="Headline_Small" className="!text-impo_White">
          از خودت مراقبت کن
        </CustomTypography>
        <CustomTypography fontSize="Body_Small" className="!text-impo_White">
          تا ۷۰ درصد تخفیف اشتراک ایمپو
        </CustomTypography>
      </div>
      <CustomLink href={BLACKFRIDAYLANDINGLINK} className="bg-white px-6 py-2 rounded-full">
        <CustomTypography fontSize="Lable_Large">شروع</CustomTypography>
      </CustomLink>
    </div>
  );
};

export default BannerBlackFriday;
