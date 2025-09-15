import DownloadpromotePage from '@components/pages/download/DownloadpromotePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنمای نصب اپلیکیشن ایمپو',
  description: 'راهنمای نصب',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/downloadpromote`,
  },
};

const Downloadpromote = () => {
  return <DownloadpromotePage />;
};

export default Downloadpromote;
