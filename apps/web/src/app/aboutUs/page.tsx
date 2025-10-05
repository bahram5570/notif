import AboutUsContainer from '@components/pages/aboutUs/AboutUsContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما',
  description: 'ایمپو | درباره‌ما',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/aboutUs`,
  },
};
const AboutUs = () => {
  return <AboutUsContainer />;
};

export default AboutUs;
