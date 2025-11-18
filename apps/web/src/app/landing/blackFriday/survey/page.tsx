import SurveyPage from '@components/pages/landing/BlackFridayPage/SurveyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'کمپین جذاب بلک فرایدی ',
  description:
    'برات کلی سوپرایز داریم و بهت میگیم که تو کجای مسیر ایمپو قرار داری و بعدش بهت یه کاراکتر میدیم و تو رو براساس اون کاراکتر از بقیه متمایز میکنیم',
  robots: { follow: false, index: false },
};

const Survey = () => {
  return <SurveyPage />;
};

export default Survey;