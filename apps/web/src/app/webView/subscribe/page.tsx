import SubscribeContainer from '@components/pages/webView/SubscribeContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Subscribe = () => {
  return <SubscribeContainer />;
};

export default Subscribe;
