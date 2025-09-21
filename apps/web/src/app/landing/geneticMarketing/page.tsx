import LandingGeneticMarketingLayout from '@components/pages/landing/GeneticMarketing/LandingGeneticMarketingLayout';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/geneticMarketing`,
  },
};

const GeneticMarketing = () => {
  return <LandingGeneticMarketingLayout />;
};

export default GeneticMarketing;
