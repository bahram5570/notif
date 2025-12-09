import WomanDayPage from '@components/pages/landing/WomanDayPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'روزمادر ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const WomanDay = () => {
  return <WomanDayPage />;
};

export default WomanDay;
