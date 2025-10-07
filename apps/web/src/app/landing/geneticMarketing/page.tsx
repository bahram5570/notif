import LandingGeneticMarketingLayout from '@components/pages/landing/GeneticMarketing/LandingGeneticMarketingLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: { follow: false, index: false },
};

const GeneticMarketing = () => {
  return <LandingGeneticMarketingLayout />;
};

export default GeneticMarketing;
