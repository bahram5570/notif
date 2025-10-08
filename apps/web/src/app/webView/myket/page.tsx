import MyketContainer from '@components/pages/webView/MyketContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const MyKet = () => {
  return <MyketContainer />;
};

export default MyKet;
