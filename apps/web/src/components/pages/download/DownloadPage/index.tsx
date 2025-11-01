import AndroidIcon from '@assets/icons/downloads/android.svg';
import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';

import DownloadAppMen from '@components/DownloadApp/DownloadAppMen';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import DownloadAppWomen2 from '@components/DownloadApp/DownloadAppWomen2';
import LinkGenerator from '@components/DownloadApp/DownloadAppWomen2/LinkGenerator';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import { APP_STORE_LINK_WOMEN_URL, DIRECT_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

const DownloadPage = () => {
  const Link1 = (
    <div className="w-full" id="download_apk_top">
      <LinkGenerator
        title="دانلود مستقیم"
        directId="women-android-direct"
        href={DIRECT_LINK_WOMEN_URL}
        Icon={<AndroidIcon className="w-6 min-w-6 h-auto" style={{ fill: COLORS_LIST.White }} />}
      />
    </div>
  );

  const Link2 = (
    <div className="w-full" id="download_appstore_top">
      <LinkGenerator
        directId="women-ios-direct"
        href={APP_STORE_LINK_WOMEN_URL}
        Icon={<AppStoreDownloadIcon className="w-[100px] h-auto" style={{ fill: COLORS_LIST.White }} />}
      />
    </div>
  );

  return (
    <HeaderFooterContainer>
      <div className="relative w-full flex flex-col items-center gap-12 pb-12">
        <DownloadAppWomen2 Link1={Link1} Link2={Link2} />
        <DownloadApp />
        <DownloadAppMen />
      </div>
    </HeaderFooterContainer>
  );
};

export default DownloadPage;
