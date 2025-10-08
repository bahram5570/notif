import GooglePlayContainer from '@components/pages/webView/GooglePlayContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const GooglePlay = () => {
  return <GooglePlayContainer />;
};

export default GooglePlay;
