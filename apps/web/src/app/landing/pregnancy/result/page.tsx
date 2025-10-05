import TestOnlineResultContainer from '@components/pages/landing/pregnancy/TestOnlineResultContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست بارداری',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/pregnancy/result`,
  },
};

const Result = () => {
  return <TestOnlineResultContainer />;
};

export default Result;
