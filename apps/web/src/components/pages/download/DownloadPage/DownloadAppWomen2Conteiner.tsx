'use client';

import AndroidIcon from '@assets/icons/downloads/android.svg';
import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';

import DownloadAppWomen2 from '@components/DownloadApp/DownloadAppWomen2';
import LinkGenerator from '@components/DownloadApp/DownloadAppWomen2/LinkGenerator';
import { APP_STORE_LINK_WOMEN_URL } from '@constants/links.constants';
import useDownloadLinks from '@hooks/useDownloadLinks';

const DownloadAppWomen2Conteiner = () => {
  const { womanDirectApplcationalink } = useDownloadLinks();

  const Link1 = (
    <div className="w-full" id="download_apk_top">
      <LinkGenerator
        title="دانلود مستقیم"
        directId="women-android-direct"
        href={womanDirectApplcationalink}
        Icon={<AndroidIcon className="w-6 min-w-6 h-auto fill-impo_White dark:fill-impo_Black" />}
      />
    </div>
  );

  const Link2 = (
    <div className="w-full" id="download_appstore_top">
      <LinkGenerator
        directId="women-ios-direct"
        href={APP_STORE_LINK_WOMEN_URL}
        Icon={<AppStoreDownloadIcon className="w-[100px] h-auto fill-impo_White dark:fill-impo_Black !scale-125" />}
      />
    </div>
  );

  return <DownloadAppWomen2 Link1={Link1} Link2={Link2} />;
};

export default DownloadAppWomen2Conteiner;
