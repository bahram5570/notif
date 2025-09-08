import DownloadPage from '@components/pages/download/DownloadPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنمای نصب اپلیکیشن ایمپو',
  description: 'راهنمای نصب',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/download`,
  },
};

const Download = () => {
  return <DownloadPage />;
};

export default Download;
