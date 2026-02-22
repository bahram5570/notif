import OvulationCalculator from '@components/pages/ovulationCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ابزار آنلاین محاسبه زمان تخمک‌گذاری بعد از پریود',
  description:
    'با استفاده از ابزار محاسبه زمان تخمک گذاری بعد از پریود انلاین ایمپو، بهترین زمان برای اقدام به بارداری را شناسایی کنید و شانس حاملگی را افزایش دهید.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/ovulation-calculator`,
  },
};

const OvulationCalculatorPage = () => {
  return <OvulationCalculator />;
};

export default OvulationCalculatorPage;
