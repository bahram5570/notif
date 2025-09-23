import LastPageGeneticLayout from '@components/pages/landing/Genetic/LastPageGeneticLayout';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: `${HOST_URL}/landing/genetic/lastPage`,
  },
};

const Pregnancy = () => {
  return <LastPageGeneticLayout />;
};

export default Pregnancy;
