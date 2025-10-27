import TestOnlineResultContainer from '@components/pages/landing/GeneticScreeningBeforePregnancy/TestOnlineResultContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنما کامل آزمایش ژنتیک قبل از بارداری و تست آنلاین رایگان',
  description:
    'آزمایش ژنتیک قبل از بارداری چیست؟چه کسانی باید آن را انجام دهند؟ با انجام این تست آنلاین رایگان، ضرورت انجام آزمایش و اطلاعات لازم را مشاهده می‌کنید.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${HOST_URL}/genetic-screening-before-pregnancy/result`,
  },
};

const Result = () => {
  return <TestOnlineResultContainer />;
};

export default Result;
