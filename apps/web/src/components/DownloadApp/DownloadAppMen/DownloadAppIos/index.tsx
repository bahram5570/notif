import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';
import AppleIcon from '@assets/icons/downloads/apple.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';
import { APP_STORE_LINK_MEN_URL } from '@constants/links.constants';
import useUserTracking from '@hooks/useUserTracking';

import IranianStoresMan from './IranianStoresMan';

const DownloadAppIos = () => {
  const { callUserTracking } = useUserTracking();

  const directId = 'women-ios-direct';

  return (
    <div className="flex flex-col items-center w-full">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
        نسخه iOS
      </CustomTypography>

      <div className="relative w-full flex flex-col gap-2 mt-4 mb-2">
        <div id="download_appstore_men">
          <CustomLink
            id={directId}
            target="_blank"
            href={APP_STORE_LINK_MEN_URL}
            aria-label="DownloadAppAndroid"
            onClick={() => callUserTracking(directId)}
            className="
                        rounded-full 
                        w-full 
                        h-12 
                        lg:h-[60px] 
                        mx-auto 
                        flex 
                        items-center 
                        justify-center 
                        gap-2 
                        relative 
                        z-10 
                        bg-impo_Neutral_OnBackground
                      "
          >
            <AppStoreDownloadIcon className="w-[100px] h-auto fill-impo_Neutral_Background" />
          </CustomLink>
        </div>

        <AppleIcon className="w-[50px] h-auto absolute -top-[40px] right-[40px] fill-impo_Surface_OutlineVariant" />
        <div className="w-full grid grid-cols-2 gap-1">
          <IranianStoresMan />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppIos;
