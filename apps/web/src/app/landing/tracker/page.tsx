import TrackerPage from '@components/pages/landing/Tracker';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ برنامه پریودی و نرم افزار محاسبه سیکل قاعدگی',
  description:
    'برنامه پریودی فارسی برای محاسبه سیکل قاعدگی؛ پیش‌بینی تخمک‌گذاری، یادآوری پریود و مدیریت علائم PMS در اپلیکیشن ایمپو',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/tracker`,
  },
};

const Tracker = () => {
  return <TrackerPage />;
};

export default Tracker;
