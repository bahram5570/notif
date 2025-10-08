import DevicesContainer from '@components/pages/webView/DevicesContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const Devices = () => {
  return <DevicesContainer />;
};

export default Devices;
