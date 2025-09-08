import IosContainer from '@components/pages/webView/IosContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Ios = () => {
  return <IosContainer />;
};

export default Ios;
