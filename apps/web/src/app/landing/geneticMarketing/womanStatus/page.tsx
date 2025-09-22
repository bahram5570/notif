import WomanStatusContainer from '@components/pages/landing/GeneticMarketing/WomanStatusContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری | فاز',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/geneticMarketing/womanStatus`,
  },
};

const womanStatus = () => {
  return <WomanStatusContainer />;
};

export default womanStatus;
