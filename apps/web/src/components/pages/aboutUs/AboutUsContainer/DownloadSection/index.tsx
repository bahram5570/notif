'use client';

import DownloadIcon from '@assets/icons/document-upload.svg';
import LogoTypeIconMobileSize from '@assets/icons/logoType-mobile-size.svg';
import LogoTypeIcon from '@assets/icons/logoType.svg';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

const DownloadSection = () => {
  const { breakPoint } = useBreakPoint();

  const downloadLinkHandler = () => {
    scrollToIdHandler(DOWNLOAD_APP_SECTION_ID);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  w-full h-full">
      <div className="bg-impo_Blue_50">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col gap-5 md:items-start items-center lg:mt-0 mt-28 lg:mb-0 mb-12">
            <div className="flex justify-center items-center md:gap-2 gap-0">
              {!breakPoint.mobile && (
                <CustomTypography fontSize="Headline_Large" tagType="span" className="!text-impo_Black">
                  سلامتی و راحتی با
                </CustomTypography>
              )}
              {breakPoint.mobile && (
                <CustomTypography fontSize="Title_Large" tagType="span" className="!text-impo_Black">
                  سلامتی و راحتی با
                </CustomTypography>
              )}

              {breakPoint.desktop && <LogoTypeIcon />}
              {!breakPoint.desktop && <LogoTypeIconMobileSize />}
            </div>

            {!breakPoint.mobile && (
              <CustomTypography fontSize="Headline_Small" className="!text-impo_Black">
                ایمپو دوستته، مشاورته، مراقبته
              </CustomTypography>
            )}
            {breakPoint.mobile && (
              <CustomTypography fontSize="Title_Small" className="!text-impo_Black">
                ایمپو دوستته، مشاورته، مراقبته
              </CustomTypography>
            )}

            <div
              onClick={downloadLinkHandler}
              aria-label="DownloadAppAndroid"
              className="rounded-xl lg:h-[45px] flex items-center justify-center py-2 px-6 gap-2 bg-impo_White cursor-pointer"
            >
              <DownloadIcon className="w-5 h-auto stroke-impo_Black" />
              <CustomTypography fontSize="Title_Small" className="!text-impo_Black">
                دانلود ایمپو
              </CustomTypography>
            </div>
          </div>
        </div>
      </div>

      <CustomImage
        src="/assets/images/aboutUs/1.webp"
        alt="aboutUs"
        width={1880}
        height={1566}
        className="w-full h-auto"
        priority={true}
      />
    </div>
  );
};

export default DownloadSection;
