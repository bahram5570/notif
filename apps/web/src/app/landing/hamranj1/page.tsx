import Hamranj1Page from '@components/pages/landing/Hamranj1Page';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'همرنج',
  description: 'همرنج',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/hamranj1`,
  },
};

const Hamranj1 = () => {
  return <Hamranj1Page />;
};

export default Hamranj1;
