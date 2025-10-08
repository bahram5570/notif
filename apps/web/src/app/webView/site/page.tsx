import SiteContainer from '@components/pages/webView/SiteContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const Site = () => {
  return <SiteContainer />;
};

export default Site;
