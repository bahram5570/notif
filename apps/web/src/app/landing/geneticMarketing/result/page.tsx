import TestOnlineResultContainer from '@components/pages/landing/GeneticMarketing/TestOnlineResultContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/geneticMarketing/result`,
  },
};

const Result = () => {
  return <TestOnlineResultContainer />;
};

export default Result;
