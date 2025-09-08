import BabyCheckGuideContainer from '@components/pages/babyCheckGuide/BabyCheckGuideContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنمای کیت بی بی چک',
  description: 'babyCheckGuide',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/babyCheckGuide`,
  },
};

const BabyCheckGuide = () => {
  return <BabyCheckGuideContainer />;
};

export default BabyCheckGuide;
