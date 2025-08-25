import SiteContainer from '@components/pages/webView/SiteContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Site = () => {
  return <SiteContainer />;
};

export default Site;
