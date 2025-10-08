import JaanPanahPage from '@components/pages/landing/JaanPanahPage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'جان پناه',
  description: 'جان پناه',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/jaan-panah`,
  },
};

const JaanPanah = () => {
  return <JaanPanahPage />;
};

export default JaanPanah;
