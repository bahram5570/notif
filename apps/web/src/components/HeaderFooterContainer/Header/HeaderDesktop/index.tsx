import ImpoNameIcon from '@assets/icons/impoName.svg';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomLink from '@components/ui/CustomLink';

import HeaderDesktopLinks from './HeaderDesktopLinks';

const HeaderDesktop = () => {
  const downloadLinkHandler = () => {
    scrollToIdHandler(DOWNLOAD_APP_SECTION_ID);
  };

  return (
    <>
      <div
        className="
                    relative 
                    w-full 
                    max-w-[calc(100%_-64px)]
                    xl:max-w-[1120px] 
                    h-[56px] 
                    lg:h-[80px] 
                    flex 
                    items-center 
                    lg:justify-between 
                    rounded-full 
                    px-4 
                    lg:px-8 
                    mt-4 
                    mx-auto 
                    bg-impo_Black_And_White
                    border-[1px]
                    border-impo_Grey_200
                    dark:border-impo_Surface_SurfaceVariant
                  "
      >
        <CustomLink href={'/'}>
          <ImpoNameIcon className="w-[68px] h-auto pointer-events-none fill-impo_Primary_Primary" />
        </CustomLink>

        <HeaderDesktopLinks />

        <CustomButton
          varient="fill"
          id="install_header"
          fontSize="Title_Small"
          className="w-[127px] h-[48px]"
          onClick={downloadLinkHandler}
        >
          نصب ایمپو
        </CustomButton>
      </div>
    </>
  );
};

export default HeaderDesktop;
