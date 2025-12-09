import GiftWomanDayPage from '@components/pages/landing/WomanDayPage/GiftWomanDayPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'کارت هدیه ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const GiftWomanDay = () => {
  return <GiftWomanDayPage />;
};

export default GiftWomanDay;
