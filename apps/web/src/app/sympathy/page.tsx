import SympathyPage from '@components/pages/sympathy/SympathyPage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'همدلی',
  description: 'sympathy',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/sympathy`,
  },
};

const Sympathy = () => {
  return <SympathyPage />;
};

export default Sympathy;
