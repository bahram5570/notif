import ClinicPage from '@components/pages/landing/ClinicPage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ویزیت با بهترین دکتر آنلاین؛ مشاوره پزشکی و ویزیت آنلاین',
  description:
    'در ایمپو، مشاوره متنی با پزشک، ویزیت دکتر آنلاین با بهترین متخصصان، ارسال مدارک، پاسخ‌گویی در روزهای تعطیل و بازگشت وجه در صورت نارضایتی فراهم است.',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/clinic`,
  },
};

const Clinic = () => {
  return <ClinicPage />;
};

export default Clinic;
