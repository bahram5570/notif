import DrDownloadPage from '@components/pages/landing/DrDownloadPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: { follow: false, index: false },
};

const DrDownload = () => {
  return <DrDownloadPage />;
};

export default DrDownload;
