import Marhaam1PageContainer from '@components/pages/landing/Marham1';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مرهم',
  description: 'مرهم',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/marham1`,
  },
};

const Marham1 = () => {
  return <Marhaam1PageContainer />;
};

export default Marham1;
