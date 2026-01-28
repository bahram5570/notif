import DownloadPairPage from '@components/pages/DownloadPair';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'پیام رسان همدل',
  description: '',
  robots: { follow: false, index: false },
};

const DownloadPair = () => {
  return <DownloadPairPage />;
};

export default DownloadPair;
