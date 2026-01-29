import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { DownloadAppWomen2Types } from './types';

const DownloadAppWomen2 = ({ Link1, Link2 }: DownloadAppWomen2Types) => {
  return (
    <div className="relative w-full h-[680px] lg:h-[740px] overflow-hidden flex justify-center items-end">
      <div className="min-w-[3500px] min-h-[3500px] lg:min-w-[10000px] lg:min-h-[10000px] flex justify-center items-end rounded-full overflow-hidden">
        <div className="relative w-[100vw] h-[680px] lg:h-[740px] flex flex-col lg:flex-row items-center justify-end lg:justify-between mx-auto px-4 md:pl-5 xl:pl-[140px] md:pr-[100px] xl:pr-[100px] 2xl:pr-[300px] bg-gradient-to-b from-[#FEF2F5] to-[#FFDDE6] dark:bg-none dark:!bg-impo_Surface_InverseOnSurface">
          <div className="relative flex flex-col lg:items-start max-w-[500px] mt-[130px]">
            <div className="absolute -top-[72px] lg:-top-[100px] left-0 w-[126px] lg:w-[160px]">
              <CustomImage
                alt=""
                fill={true}
                quality={99}
                className="!w-full !h-auto"
                src={'/assets/images/downloadAppBanner.webp'}
              />
            </div>

            <CustomTypography
              fontSize="Headline_Small"
              className="text-center lg:text-start pb-2 px-6 !text-impo_Black dark:!text-impo_Neutral_OnBackground"
            >
              کامل‌ترین اپلیکیشن سلامت بانوان در خاورمیانه
            </CustomTypography>

            <CustomTypography
              fontSize="Body_Large"
              className="text-center lg:text-start lg:px-6 !text-impo_Black dark:!text-impo_Neutral_OnBackground"
            >
              بیش از ۳ میلیون بانو در مسیر سلامتی از پریود تا باروری ایمپو رو برای همراهی انتخاب کردن.
            </CustomTypography>

            <div className="w-full flex items-center justify-between gap-4 pt-6">
              {Link1}
              {Link2}
            </div>
          </div>

          <div className="relative flex h-full w-full max-w-[400px] sm:max-w-full sm:w-[400px] lg:w-[600px]">
            <CustomImage
              alt=""
              fill={true}
              quality={99}
              src={'/assets/images/downloadAppFooter.webp'}
              className="!w-full !h-auto mt-auto translate-y-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppWomen2;
