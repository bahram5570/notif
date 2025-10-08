import AfterDeadlineContainer from '@components/pages/webView/AfterDeadlineContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const AfterDeadline = () => {
  return <AfterDeadlineContainer />;
};

export default AfterDeadline;
