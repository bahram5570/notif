import MyketContainer from '@components/pages/webView/MyketContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const MyKet = () => {
  return <MyketContainer />;
};

export default MyKet;
