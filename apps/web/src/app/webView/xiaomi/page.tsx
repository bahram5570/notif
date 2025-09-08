import XiaomiContainer from '@components/pages/webView/XiaomiContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Xiaomi = () => {
  return <XiaomiContainer />;
};

export default Xiaomi;
