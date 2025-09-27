import LastPageGeneticMarketingLayout from '@components/pages/landing/GeneticMarketing/LastPageGeneticMarketingLayout';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/geneticMarketing/lastPage`,
  },
};

const Pregnancy = () => {
  return <LastPageGeneticMarketingLayout />;
};

export default Pregnancy;
