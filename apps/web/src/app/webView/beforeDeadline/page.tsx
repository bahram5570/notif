import BeforeDeadlineContainer from '@components/pages/webView/BeforeDeadlineContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const BeforeDeadline = () => {
  return <BeforeDeadlineContainer />;
};

export default BeforeDeadline;
