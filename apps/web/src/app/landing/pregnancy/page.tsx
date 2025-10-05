import LandingPregnancyContainer from '@components/pages/landing/pregnancy/LandingPregnancyContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست بارداری',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/pregnancy`,
  },
};

const Pregnancy = () => {
  return <LandingPregnancyContainer />;
};

export default Pregnancy;
