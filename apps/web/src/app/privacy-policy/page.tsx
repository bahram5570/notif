import PrivacyPolicy from '@components/pages/PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سیاست حریم خصوصی ایمپو',
  description:
    'در ایمپو، حریم خصوصی فقط یک الزام قانونی نیست؛ بخشی از تعهد ما به مراقبت آگاهانه، محترمانه و همدلانه از کاربران است.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/privacy-policy`,
  },
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
