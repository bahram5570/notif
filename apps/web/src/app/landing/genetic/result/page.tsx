import TestOnlineResultContainer from '@components/pages/landing/Genetic/TestOnlineResultContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: `${HOST_URL}/genetic/result`,
  },
};

const Result = () => {
  return <TestOnlineResultContainer />;
};

export default Result;
