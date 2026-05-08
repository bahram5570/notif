import IntentionPage from '@components/pages/landing/Intention';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'برنامه تخمک‌گذاری؛ پیش‌بینی دقیق با ایمپو',
  description:
    'با برنامه تخمک‌گذاری ایمپو، روزهای باروریت رو دقیق ببین، یادآوری بهترین زمان اقدام رو بگیر و با روتین‌های تخصصی شانس بارداریت رو بیشتر کن.',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/intention`,
  },
};

const Intention = () => {
  return <IntentionPage />;
};

export default Intention;
