import EnterPhonePage from '@components/pages/landing/BlackFridayPage/EnterPhone';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'جمعه دل‌نواز ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const EnterPhone = () => {
  return <EnterPhonePage />;
};

export default EnterPhone;
