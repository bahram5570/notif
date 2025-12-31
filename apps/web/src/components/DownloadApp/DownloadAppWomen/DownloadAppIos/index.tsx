import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';
import AppleIcon from '@assets/icons/downloads/apple.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { APP_STORE_LINK_WOMEN_URL } from '@constants/links.constants';
import useUserTracking from '@hooks/useUserTracking';

import IranianStores from './IranianStores';

const DownloadAppIos = () => {
  const { callUserTracking } = useUserTracking();

  const directId = 'women-ios-direct';

  return (
    <div className="flex flex-col items-center w-full">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
        نسخه iOS
      </CustomTypography>

      <div className="relative w-full mt-4 mb-2" id="download_appstore">
        <CustomLink
          id={directId}
          target="_blank"
          aria-label="DownloadAppAndroid"
          href={APP_STORE_LINK_WOMEN_URL}
          onClick={() => callUserTracking(directId)}
          className="w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 bg-impo_Neutral_OnBackground rounded-full relative z-10"
        >
          <AppStoreDownloadIcon className="w-[100px] h-auto fill-impo_Neutral_Background" />
        </CustomLink>

        <AppleIcon className="absolute -top-[40px] right-[40px] w-[50px] h-auto fill-impo_Surface_OutlineVariant z-0" />
      </div>

      <div className="w-full grid grid-cols-2 gap-1">
        <IranianStores />
      </div>
    </div>
  );
};

export default DownloadAppIos;
