import AfterDeadlineContainer from '@components/pages/webView/AfterDeadlineContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AfterDeadline = () => {
  return <AfterDeadlineContainer />;
};

export default AfterDeadline;
