import SympathyRequestContainer from '@components/pages/webView/SympathyRequestContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const SympathyRequest = () => {
  return <SympathyRequestContainer />;
};

export default SympathyRequest;
