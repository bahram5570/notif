import PhoneNumberContainer from '@components/pages/landing/GeneticMarketing/PhoneNumberContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری | شماره همراه',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/geneticMarketing/phoneNumber`,
  },
};

const PhoneNumber = () => {
  return <PhoneNumberContainer />;
};

export default PhoneNumber;
