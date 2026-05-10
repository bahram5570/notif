// import SympathyPage from '@components/pages/sympathy/SympathyPage';
import SympathyPage from '@components/pages/sympathy/SympathyPage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'برنامه پریودی برای پارتنر؛ همدلی ایمپو',
  description:
    'با برنامه پریودی برای پارتنر ایمپو، همسرت چرخه قاعدگی، PMS و روزهای حساست رو می‌بینه و بهش یادآوری میشه تا همراه‌تر و آگاهانه‌تر کنارت باشه.',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/sympathy`,
  },
};

const Sympathy = () => {
  return <SympathyPage />;
};

export default Sympathy;
