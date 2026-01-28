import TermsContainer from '@components/pages/Terms/TermsContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'قوانین و مقررات استفاده از پلتفرم ایمپو',
  description: 'قوانین و مقررات استفاده از پلتفرم ایمپو',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/terms`,
  },
};

const Terms = () => {
  return <TermsContainer />;
};

export default Terms;
