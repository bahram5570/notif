import Hamranj2Page from '@components/pages/landing/Hamranj2Page';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'همرنج',
  description: 'همرنج',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/landing/hamranj2`,
  },
};

const Hamranj2 = () => {
  return <Hamranj2Page />;
};

export default Hamranj2;
