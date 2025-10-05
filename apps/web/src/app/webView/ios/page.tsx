import IosContainer from '@components/pages/webView/IosContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const Ios = () => {
  return <IosContainer />;
};

export default Ios;
