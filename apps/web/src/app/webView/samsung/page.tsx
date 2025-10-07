import SamsungContainer from '@components/pages/webView/SamsungContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const Samsung = () => {
  return <SamsungContainer />;
};

export default Samsung;
