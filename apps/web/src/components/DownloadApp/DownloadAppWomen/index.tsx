'use client';

import ImpoIcon from '@assets/icons/impo.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import DownloadAppAndroid from './DownloadAppAndroid';
import DownloadAppIos from './DownloadAppIos';
import { DOWNLOAD_APP_SECTION_ID } from './constants';

const DownloadApp = () => {
  const { breakPoint } = useSystem();

  return (
    <div
      id={DOWNLOAD_APP_SECTION_ID}
      className="
                  flex 
                  flex-col 
                  md:flex-row 
                  items-center 
                  md:justify-center 
                  md:gap-6 
                  lg:gap-14 
                  xl:gap-32 
                  rounded-3xl 
                  px-4 
                  pt-8 
                  pb-2 
                  md:py-8 
                  mx-auto 
                  w-full 
                  max-w-[360px] 
                  md:w-11/12 
                  lg:w-10/12 
                  md:max-w-full
                  bg-impo_Neutral_Surface
                "
    >
      <div className="flex flex-col items-center w-full md:w-[400px]">
        <ImpoIcon className="w-[72px] mb-2 md:hidden" />

        <div className="flex gap-1">
          <CustomTypography tagType="span" fontSize="Headline_Medium" className="!text-impo_Neutral_OnBackground">
            ایمپو برات لازمه:
          </CustomTypography>
        </div>

        <section className="flex flex-col items-center">
          <div className="pt-2 pb-10 -mx-2">
            <CustomTypography
              fontSize={breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}
              className="text-center !text-impo_Neutral_OnBackground"
            >
              اگه می‌خوای بچه‌دار شی و روز دقیق رابطه رو بدونی
            </CustomTypography>

            <CustomTypography
              fontSize={breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}
              className="text-center !text-impo_Neutral_OnBackground"
            >
              اگه می‌خوای هیچ‌وقت پریودت سوپرایزت نکنه
            </CustomTypography>

            <CustomTypography
              fontSize={breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}
              className="text-center !text-impo_Neutral_OnBackground"
            >
              اگه بارداری و می‌خوای از وضعیت هفتگی جنینت باخبر بشی
            </CustomTypography>

            <CustomTypography
              fontSize={breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}
              className="text-center !text-impo_Neutral_OnBackground"
            >
              اگه سلامتیت برات مهمه، همین الان ایمپو رو نصب کن
            </CustomTypography>
          </div>

          <DownloadAppAndroid />

          <div className="w-full h-[1px] mt-4 md:mt-8 mb-8 bg-impo_Neutral_Surface" />

          <DownloadAppIos />
        </section>
      </div>

      <CustomImage
        height={0}
        width={520}
        quality={100}
        sizes="600px"
        alt="downloadAppMain"
        src="/assets/images/downloadAppMain.webp"
        className="pt-6 md:p-0 w-full md:max-w-[280px] lg:min-w-[230px] lg:max-w-[430px] xl:max-w-[520px]"
      />
    </div>
  );
};

export default DownloadApp;
