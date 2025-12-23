'use client';

import LogoTypeIconMobileSize from '@assets/icons/logoType-mobile-size.svg';
import LogoTypeIcon from '@assets/icons/logoType.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

const ContactUsHeader = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  w-full h-full">
      <div className="bg-impo_Surface_SurfaceVariant">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col gap-4 md:items-start items-center lg:mt-0 mt-28 lg:mb-0 mb-12  sm:p-16 p-3">
            <div className="flex justify-center items-center md:gap-2 gap-0">
              {!breakPoint.mobile && (
                <CustomTypography fontSize="Headline_Large" tagType="span" className="!text-impo_Neutral_OnBackground">
                  تماس با
                </CustomTypography>
              )}
              {breakPoint.mobile && (
                <CustomTypography fontSize="Title_Large" tagType="span" className="!text-impo_Neutral_OnBackground">
                  تماس با
                </CustomTypography>
              )}

              {breakPoint.desktop && <LogoTypeIcon />}
              {!breakPoint.desktop && <LogoTypeIconMobileSize />}
            </div>

            <CustomTypography
              fontSize="Body_Medium"
              className="text-center sm:text-start !text-impo_Neutral_OnBackground"
            >
              ایمپویی عزیز، خوشحالیم که اینجایی تا نظراتت رو با ما در میون بگذاری. میتونی سوالات، پیشنهادات و مشکلاتت در
              رابطه با پلتفرم ایمپو رو از طریق تکمیل فرم زیر به ما منتقل کنی
            </CustomTypography>
          </div>
        </div>
      </div>
      <CustomImage
        src="/assets/images/contactUs.webp"
        alt="aboutUs"
        width={1880}
        height={1500}
        className="w-full h-auto"
        priority={true}
      />
    </div>
  );
};

export default ContactUsHeader;
