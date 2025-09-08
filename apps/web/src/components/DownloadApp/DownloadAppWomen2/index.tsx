import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { SMALL_SCREEN_MAX_WIDTH } from '@constants/app.constants';

import { DownloadAppWomen2Types } from './types';

const CONTAINER_HEIGHT = 680;

const DownloadAppWomen2 = ({ Link1, Link2 }: DownloadAppWomen2Types) => {
  return (
    <div
      style={{ height: CONTAINER_HEIGHT }}
      className="relative w-full overflow-hidden flex justify-center items-end lg:!h-[150px]"
    >
      <div className="min-w-[3500px] min-h-[3500px] flex justify-center items-end rounded-full overflow-hidden lg:hidden">
        <div
          style={{ maxWidth: SMALL_SCREEN_MAX_WIDTH, height: CONTAINER_HEIGHT }}
          className="relative w-[100vw] flex flex-col items-center justify-end mx-auto px-4 bg-gradient-to-b from-[#FEF2F5] to-[#FFDDE6]"
        >
          <div className="w-full flex justify-end translate-y-2">
            <CustomImage alt="" width={126} height={90} src={'/assets/images/downloadAppBanner.webp'} />
          </div>

          <CustomTypography fontSize="Headline_Small" color={'Neutral_OnBackground'} className="text-center pb-2 px-6">
            کامل‌ترین اپلیکیشن سلامت بانوان در خاورمیانه
          </CustomTypography>

          <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'} className="text-center">
            بیش از ۳ میلیون بانو در مسیر سلامتی از پریود تا باروری ایمپو رو برای همراهی انتخاب کردن.
          </CustomTypography>

          <div className="w-full flex items-center justify-between gap-4 pt-6">
            {Link1}
            {Link2}
          </div>

          <CustomImage
            alt=""
            width={480}
            height={360}
            quality={99}
            className="translate-y-4"
            src={'/assets/images/downloadAppFooter.webp'}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppWomen2;
