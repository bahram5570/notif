import IranGirlNamePage from '@components/pages/landing/NameSelection/IranGirlNamePage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'لیست کامل زیباترین اسم دختر ایرانی اصیل و لاکچری',
  description:
    'در این راهنما لیست زیباترین اسم‌ دختر ایرانی اصیل و لاکچری بر اساس حروف الفبا و همراه با معنی را آماده کرده‌ایم تا انتخاب اسم دخترانه فارسی ساده و لذت بخش شود.',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/landing/iran-girl-name`,
  },
};

const IranGirlName = () => {
  return <IranGirlNamePage />;
};

export default IranGirlName;
