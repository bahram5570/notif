'use client';

import ImpoIcon from '@assets/icons/impoMen.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

import { DOWNLOAD_APP_SECTION_ID } from '../DownloadAppWomen/constants';
import DownloadAppAndroid from './DownloadAppAndroid';
import DownloadAppIos from './DownloadAppIos';

const DownloadAppMen = () => {
  const { breakPoint } = useBreakPoint();

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
                  bg-impo_Surface_SurfaceVariant
                "
    >
      <div className="flex flex-col items-center w-full md:w-[400px]">
        <ImpoIcon className="w-[72px] mb-2 md:hidden" />

        <section className="flex flex-col items-center">
          <CustomTypography
            fontSize={breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}
            className="pt-2 pb-10 px-2 text-center !text-impo_Neutral_OnBackground"
          >
            ایمپو آقایان رو میتونی از معتبرترین استورها یا به صورت مستقیم از لینک زیر دانلود کنی.
          </CustomTypography>

          <DownloadAppAndroid />

          <div className="w-full h-[1px] mt-4 md:mt-8 mb-8 bg-impo_Neutral_Surface" />

          <DownloadAppIos />
        </section>
      </div>

      <CustomImage
        height={0}
        width={520}
        sizes="520px"
        alt="downloadAppMainMen"
        src="/assets/images/downloadAppMainMen.webp"
        className="pt-6 md:p-0 w-full md:max-w-[280px] lg:min-w-[230px] lg:max-w-[430px] xl:max-w-[520px]"
      />
    </div>
  );
};

export default DownloadAppMen;
