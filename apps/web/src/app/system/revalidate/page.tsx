import RevalidatePage from '@components/pages/system/Revalidate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'حذف کش صفحات',
  description: 'حذف کش صفحات',
  robots: { follow: false, index: false },
};

const Revalidate = () => {
  return <RevalidatePage />;
};

export default Revalidate;
