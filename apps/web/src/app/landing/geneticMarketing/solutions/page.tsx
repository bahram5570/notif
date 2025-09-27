import TestOnlineSolutionsContainer from '@components/pages/landing/GeneticMarketing/TestOnlineSolutionsContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست غربالگری',
  robots: 'noindex, nofollow',
};

const Solutions = () => {
  return <TestOnlineSolutionsContainer />;
};

export default Solutions;
