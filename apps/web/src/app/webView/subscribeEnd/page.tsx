import SubscribeEndContainer from '@components/pages/webView/SubscribeEndContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const SubscribeEnd = () => {
  return <SubscribeEndContainer />;
};

export default SubscribeEnd;
