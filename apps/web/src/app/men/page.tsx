import MenPage from '@components/pages/men/MenPage';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو آقایان - ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  description: 'ایمپو آقایان - ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/men`,
  },
};

const Men = () => {
  return <MenPage />;
};

export default Men;
