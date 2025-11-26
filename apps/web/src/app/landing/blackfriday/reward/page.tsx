import RewardPage from '@components/pages/landing/BlackFridayPage/RewardPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'جمعه دل‌نواز ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const Reward = () => {
  return <RewardPage />;
};

export default Reward;
