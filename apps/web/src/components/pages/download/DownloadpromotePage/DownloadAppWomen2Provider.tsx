'use client';

import AndroidIcon from '@assets/icons/downloads/android.svg';
import AppStoreDownloadIcon from '@assets/icons/downloads/appStoreDownload.svg';

import DownloadAppWomen2 from '@components/DownloadApp/DownloadAppWomen2';
import LinkGenerator from '@components/DownloadApp/DownloadAppWomen2/LinkGenerator';
import { APP_STORE_LINK_WOMEN_URL } from '@constants/links.constants';
import useDownloadLinks from '@hooks/useDownloadLinks';

const DownloadAppWomen2Provider = () => {
  const { womanDirectApplcationalink } = useDownloadLinks();

  const Link1 = (
    <LinkGenerator
      title="دانلود مستقیم"
      directId="women-android-direct downloadpromote"
      href={womanDirectApplcationalink}
      Icon={<AndroidIcon className="w-6 min-w-6 h-auto !fill-impo_White" />}
    />
  );

  const Link2 = (
    <LinkGenerator
      directId="women-ios-direct downloadpromote"
      href={APP_STORE_LINK_WOMEN_URL}
      Icon={<AppStoreDownloadIcon className="w-[100px] h-auto !fill-impo_White" />}
    />
  );

  return <DownloadAppWomen2 Link1={Link1} Link2={Link2} />;
};

export default DownloadAppWomen2Provider;
