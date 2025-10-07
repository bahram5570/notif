import LastPageGeneticMarketingLayout from '@components/pages/landing/GeneticMarketing/LastPageGeneticMarketingLayout';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/geneticMarketing/lastPage`,
  },
};

const Pregnancy = () => {
  return <LastPageGeneticMarketingLayout />;
};

export default Pregnancy;
