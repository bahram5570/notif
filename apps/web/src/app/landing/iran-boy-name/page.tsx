import IranBoyNamePage from '@components/pages/landing/NameSelection/IranBoyNamePage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لیست کامل اسم پسر ایرانی اصیل لاکچری با معنی و ریشه',
  description:
    'در این راهنما انتخاب اسم، مجموعه کاملی از اسم پسر ایرانی اصیل، همراه با معنی و ریشه آماده شده است تا بهترین نام را برای فرزند خود انتخاب کنید.',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/iran-boy-name`,
  },
};

const IranBoyName = () => {
  return <IranBoyNamePage />;
};

export default IranBoyName;
