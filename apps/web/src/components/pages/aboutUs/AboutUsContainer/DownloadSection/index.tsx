'use client';

import LogoTypeIconMobileSize from '@assets/icons/logoType-mobile-size.svg';
import LogoTypeIcon from '@assets/icons/logoType.svg';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton2 from '@components/ui/CustomButton2';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

const DownloadSection = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  w-full h-full bg-impo_Surface_SurfaceVariant">
      <div className="bg-impo_Surface_SurfaceVariant  ">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col gap-5 md:items-start items-center lg:mt-0 mt-28 lg:mb-0 mb-12">
            <div className="flex justify-center items-center md:gap-2 gap-0">
              {!breakPoint.mobile && (
                <CustomTypography fontSize="Headline_Large" tagType="span" className="!text-impo_Neutral_OnBackground">
                  سلامتی و راحتی با
                </CustomTypography>
              )}
              {breakPoint.mobile && (
                <CustomTypography fontSize="Title_Large" tagType="span" className="!text-impo_Neutral_OnBackground">
                  سلامتی و راحتی با
                </CustomTypography>
              )}

              {breakPoint.desktop && <LogoTypeIcon />}
              {!breakPoint.desktop && <LogoTypeIconMobileSize />}
            </div>

            {!breakPoint.mobile && (
              <CustomTypography fontSize="Headline_Small" className="!text-impo_Neutral_OnBackground">
                ایمپو دوستته، مشاورته، مراقبته
              </CustomTypography>
            )}
            {breakPoint.mobile && (
              <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
                ایمپو دوستته، مشاورته، مراقبته
              </CustomTypography>
            )}

            <CustomButton2
              className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8 !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
              onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
              fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
            >
              دانلود ایمپو
            </CustomButton2>
          </div>
        </div>
      </div>
      <div className="pt-[20px]">
        <CustomImage
          src="/assets/images/aboutUs/light.webp"
          alt="aboutUs"
          width={1880}
          height={1566}
          className="w-full h-auto dark:hidden block"
          priority={true}
        />
        <CustomImage
          src="/assets/images/aboutUs/dark.webp"
          alt="aboutUs"
          width={1880}
          height={1566}
          className="w-full h-auto dark:block hidden"
          priority={true}
        />
      </div>
    </div>
  );
};

export default DownloadSection;
