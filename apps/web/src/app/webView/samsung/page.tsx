import SamsungContainer from '@components/pages/webView/SamsungContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Samsung = () => {
  return <SamsungContainer />;
};

export default Samsung;
