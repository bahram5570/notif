import ContentIntegrity from '@components/pages/contentIntegrity';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'استانداردهای تولید محتوای سلامت در ایمپو',
  description:
    'در ایمپو، محتوای سلامت با تکیه بر شواهد علمی، زبان همدلانه، بازبینی علمی و مسئولانه تولید می‌شود تا به تصمیم‌گیری آگاهانه کاربران کمک کند.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/content-integrity`,
  },
};

const ContentIntegrityPage = () => {
  return <ContentIntegrity />;
};

export default ContentIntegrityPage;
