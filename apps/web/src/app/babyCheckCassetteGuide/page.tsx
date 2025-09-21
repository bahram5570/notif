import BabyCheckCassetteGuideContainer from '@components/pages/babyCheckCassetteGuide/BabyCheckCassetteGuideContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنمای کیت بی بی چک کاستی',
  description: 'babyCheckCassetteGuide',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/babyCheckCassetteGuide`,
  },
};

const BabyCheckCassetteGuide = () => {
  return <BabyCheckCassetteGuideContainer />;
};

export default BabyCheckCassetteGuide;
