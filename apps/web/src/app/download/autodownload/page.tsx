import AutoDownloadPage from '@components/pages/download/AutoDownloadPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دانلود و نصب اپلیکیشن ایمپو',
  description: 'راهنمای نصب',
};

const AutoDownload = () => {
  return <AutoDownloadPage />;
};

export default AutoDownload;
