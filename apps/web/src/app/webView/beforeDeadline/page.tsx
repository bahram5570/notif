import BeforeDeadlineContainer from '@components/pages/webView/BeforeDeadlineContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const BeforeDeadline = () => {
  return <BeforeDeadlineContainer />;
};

export default BeforeDeadline;
