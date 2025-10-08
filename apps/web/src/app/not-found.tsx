import NotFoundPage from '@components/pages/notFound/NotFoundPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفحه مورد نظر پیدا نشد!',
  robots: { follow: false, index: false },
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
