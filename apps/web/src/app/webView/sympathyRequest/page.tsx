import SympathyRequestContainer from '@components/pages/webView/SympathyRequestContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const SympathyRequest = () => {
  return <SympathyRequestContainer />;
};

export default SympathyRequest;
