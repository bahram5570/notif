import BlackFridayPage from '@components/pages/landing/BlackFridayPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'جمعه دل‌نواز ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const BlackFriday = () => {
  return <BlackFridayPage />;
};

export default BlackFriday;