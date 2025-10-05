import SubscribeEndContainer from '@components/pages/webView/SubscribeEndContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const SubscribeEnd = () => {
  return <SubscribeEndContainer />;
};

export default SubscribeEnd;
