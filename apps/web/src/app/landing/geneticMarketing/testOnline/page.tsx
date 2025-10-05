import TestOnlineContainer from '@components/pages/landing/GeneticMarketing/TestOnlineContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست بارداری',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/geneticMarketing/testonline`,
  },
};

const Testonline = () => {
  return <TestOnlineContainer />;
};

export default Testonline;
