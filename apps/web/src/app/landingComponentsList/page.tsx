import { Metadata } from 'next';

import LandingComponentsListContainer from './LandingComponentsListContainer';

export const metadata: Metadata = {
  title: 'کامپوننت لندینگ ها',
  description: 'کامپوننت لندینگ ها',
  robots: { follow: false, index: false },
};

const LandingComponentsList = () => {
  return <LandingComponentsListContainer />;
};

export default LandingComponentsList;
