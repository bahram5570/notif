import ResultWomanDayPage from '@components/pages/landing/WomanDayPage/ResultWomanDayPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'روزمادر ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const ResultWomanDay = () => {
  return <ResultWomanDayPage />;
};

export default ResultWomanDay;
