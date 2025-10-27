import LandingGeneticLayout from '@components/pages/landing/GeneticScreeningBeforePregnancy/LandingGeneticLayout';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنما کامل آزمایش ژنتیک قبل از بارداری و تست آنلاین رایگان',
  description:
    'آزمایش ژنتیک قبل از بارداری چیست؟چه کسانی باید آن را انجام دهند؟ با انجام این تست آنلاین رایگان، ضرورت انجام آزمایش و اطلاعات لازم را مشاهده می‌کنید.',
  alternates: {
    canonical: `${HOST_URL}/landing/genetic-screening-before-pregnancy`,
  },
};

const GeneticScreening = () => {
  return <LandingGeneticLayout />;
};

export default GeneticScreening;
