import ChangeLastPeriodContainer from '@components/pages/webView/ChangeLastPeriodContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const ChangeLastPeriod = () => {
  return <ChangeLastPeriodContainer />;
};

export default ChangeLastPeriod;
