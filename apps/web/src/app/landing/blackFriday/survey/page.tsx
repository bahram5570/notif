import SurveyPage from '@components/pages/landing/BlackFridayPage/SurveyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'کمپین جذاب بلک فرایدی ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const Survey = () => {
  return <SurveyPage />;
};

export default Survey;
