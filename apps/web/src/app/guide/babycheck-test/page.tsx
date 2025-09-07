import BabycheckTestContainer from '@components/pages/guide/BabycheckTestContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تست کیت بی‌بی چک',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/guide/babycheck-test`,
  },
};

const BabycheckTest = () => {
  return <BabycheckTestContainer />;
};

export default BabycheckTest;
