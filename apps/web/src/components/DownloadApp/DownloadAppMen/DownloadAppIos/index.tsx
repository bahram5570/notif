import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';
import AppleIcon from '@assets/icons/downloads/apple.svg';
import PwaIcon from '@assets/icons/downloads/pwa.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { APP_STORE_LINK_MEN_URL, PWA_LINK_MEN_URL } from '@constants/links.constants';
import useUserTracking from '@hooks/useUserTracking';
import { COLORS_LIST } from '@theme/colors';

const DownloadAppIos = () => {
  const { callUserTracking } = useUserTracking();

  const directId = 'women-ios-direct';
  const pwaId = 'men-pwa';

  return (
    <div className="flex flex-col items-center w-full">
      <CustomTypography fontSize="Title_Small">نسخه iOS</CustomTypography>

      <div className="relative w-full flex flex-col gap-2 mt-4 mb-2">
        <CustomLink
          id={directId}
          target="_blank"
          href={APP_STORE_LINK_MEN_URL}
          aria-label="DownloadAppAndroid"
          onClick={() => callUserTracking(directId)}
          style={{ backgroundColor: COLORS_LIST.Neutral_OnBackground }}
          className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
        >
          <AppStoreDownloadIcon className="w-[100px] h-auto" style={{ fill: COLORS_LIST.White }} />
        </CustomLink>

        <CustomLink
          id={pwaId}
          target="_blank"
          href={PWA_LINK_MEN_URL}
          aria-label="DownloadAppAndroidMen"
          // onClick={() => callUserTracking(pwaId)}
          style={{ backgroundColor: COLORS_LIST.White, borderColor: COLORS_LIST.Neutral_Surface }}
          className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
        >
          <PwaIcon className="w-6" style={{ fill: COLORS_LIST.Neutral_OnSurface }} />

          <CustomTypography fontSize="Title_Small" color="Neutral_OnSurface">
            نسخه وب اپ
          </CustomTypography>
        </CustomLink>

        <AppleIcon
          className="w-[50px] h-auto absolute -top-[40px] right-[40px] z-0"
          style={{ fill: COLORS_LIST.Surface_OutlineVariant }}
        />

        <div
          className="absolute top-0 bottom-0 right-0 left-0 pointer-events-none"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        />
      </div>
    </div>
  );
};

export default DownloadAppIos;
