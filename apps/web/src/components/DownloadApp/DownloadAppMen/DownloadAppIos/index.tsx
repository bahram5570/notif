import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';
import AppleIcon from '@assets/icons/downloads/apple.svg';
import PwaIcon from '@assets/icons/downloads/pwa.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { APP_STORE_LINK_MEN_URL, PWA_LINK_MEN_URL } from '@constants/links.constants';
import useUserTracking from '@hooks/useUserTracking';

const DownloadAppIos = () => {
  const { callUserTracking } = useUserTracking();

  const directId = 'women-ios-direct';
  const pwaId = 'men-pwa';

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
            className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10 bg-impo_Black"
          >
            <AppStoreDownloadIcon className="w-[100px] h-auto fill-impo_White" />
          </CustomLink>
        </div>

        <div id="download_pwa_men">
          <CustomLink
            id={pwaId}
            target="_blank"
            href={PWA_LINK_MEN_URL}
            aria-label="DownloadAppAndroidMen"
            // onClick={() => callUserTracking(pwaId)}
            className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10 bg-impo_White border-impo_Neutral_Surface"
          >
            <PwaIcon className="w-6 fill-impo_Black" />

            <CustomTypography fontSize="Title_Small" className="!text-impo_Black">
              نسخه وب اپ
            </CustomTypography>
          </CustomLink>
        </div>

        <AppleIcon className="w-[50px] h-auto absolute -top-[40px] right-[40px] fill-impo_Surface_OutlineVariant" />
      </div>
    </div>
  );
};

export default DownloadAppIos;
