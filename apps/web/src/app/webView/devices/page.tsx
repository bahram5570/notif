import DevicesContainer from '@components/pages/webView/DevicesContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Devices = () => {
  return <DevicesContainer />;
};

export default Devices;
