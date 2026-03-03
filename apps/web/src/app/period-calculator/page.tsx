import PeriodCalculatorComponent from '@components/pages/PeriodCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ابزار محاسبه سیکل قاعدگی آنلاین و پیش‌بینی زمان دقیق پریود',
  description: 'با ابزار محاسبه سیکل قاعدگی آنلاین ایمپو، زمان دقیق پریود بعدی را با دقت بالا پیش‌بینی کنید.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/period-calculator`,
  },
};

const PeriodCalculatorPage = () => {
  return <PeriodCalculatorComponent />;
};

export default PeriodCalculatorPage;
