import HamtapayPage from '@components/pages/landing/Hamtapay';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'همتاپی',
  description: 'همتاپی',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/girl-name`,
  },
};

const Hamtapay = () => {
  return <HamtapayPage />;
};

export default Hamtapay;
