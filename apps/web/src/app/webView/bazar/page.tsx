import BazarContainer from '@components/pages/webView/BazarContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const Bazar = () => {
  return <BazarContainer />;
};

export default Bazar;
