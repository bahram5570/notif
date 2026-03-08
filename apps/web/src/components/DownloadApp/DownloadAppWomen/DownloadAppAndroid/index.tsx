// import Bazar1Icon from '@assets/icons/bazar1.svg';
// import Bazar2Icon from '@assets/icons/bazar2.svg';
import AndroidIcon from '@assets/icons/downloads/android.svg';
import MyKet1Icon from '@assets/icons/myket1.svg';
import MyKet2Icon from '@assets/icons/myket2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import DownloadAppLinkGenerator from '@components/DownloadApp/DownloadAppLinkGenerator';
import CustomLink from '@components/ui/CustomLink';
import { CAFEBAZAAR_LINK_WOMEN_URL, MYKET_LINK_WOMEN_URL } from '@constants/links.constants';
import useDownloadLinks from '@hooks/useDownloadLinks';
import useUserTracking from '@hooks/useUserTracking';
import { useSystem } from '@repo/core/hooks/useSystem';

const DownloadAppAndroid = () => {
  const { callUserTracking } = useUserTracking();
  const { womanDirectApplcationalink } = useDownloadLinks();
  const { breakPoint } = useSystem();

  const directId = 'women-android-direct';

  return (
    <div className="flex flex-col items-center w-full">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
        نسخه اندروید
      </CustomTypography>

      <div className="relative w-full mt-4 mb-2" id="download_apk">
        <CustomLink
          id={directId}
          target="_blank"
          href={breakPoint.mobile && breakPoint.tablet ? '/download/autodownload' : womanDirectApplcationalink}
          aria-label="DownloadAppAndroid"
          onClick={() => callUserTracking(directId)}
          className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 bg-impo_Neutral_OnBackground"
        >
          <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_Background">
            دانلود مستقیم
          </CustomTypography>

          <AndroidIcon className="w-6 min-w-6 h-auto fill-impo_Neutral_Background" />
        </CustomLink>

        <AndroidIcon className="w-[50px] h-auto absolute -top-[30px] right-[40px] fill-impo_Surface_OutlineVariant" />
      </div>

      <div className="w-full grid grid-cols-1 gap-2">
        <div id="download_myket">
          <DownloadAppLinkGenerator href={MYKET_LINK_WOMEN_URL} id="women-myket">
            <div className="w-full flex items-center justify-center gap-1">
              <MyKet1Icon className="w-6 min-w-6 h-auto" />

              <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_OnSurfaceVariant">
                دریافت از
              </CustomTypography>

              <MyKet2Icon className="w-[50px] min-w-[50px] h-auto" />
            </div>
          </DownloadAppLinkGenerator>
        </div>

        {/* <div id="download_cafebazaar">
          <DownloadAppLinkGenerator href={CAFEBAZAAR_LINK_WOMEN_URL} id="women-bazar">
            <div className="w-full flex items-center justify-center gap-1">
              <Bazar1Icon className="w-6 min-w-6 h-auto" />

              <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_OnSurfaceVariant">
                دریافت از
              </CustomTypography>

              <Bazar2Icon className="w-[38px] h-auto" />
            </div>
          </DownloadAppLinkGenerator>
        </div> */}
      </div>
    </div>
  );
};

export default DownloadAppAndroid;
