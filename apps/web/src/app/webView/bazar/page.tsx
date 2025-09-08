import BazarContainer from '@components/pages/webView/BazarContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Bazar = () => {
  return <BazarContainer />;
};

export default Bazar;
