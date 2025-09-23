import LandingGeneticLayout from '@components/pages/landing/Genetic/LandingGeneticLayout';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: `${HOST_URL}/landing/genetic`,
  },
};

const Genetic = () => {
  return <LandingGeneticLayout />;
};

export default Genetic;
