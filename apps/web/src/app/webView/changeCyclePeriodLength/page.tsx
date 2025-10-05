import ChangeCyclePeriodLengthContainer from '@components/pages/webView/ChangeCyclePeriodLengthContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const ChangeCyclePeriodLength = () => {
  return <ChangeCyclePeriodLengthContainer />;
};

export default ChangeCyclePeriodLength;
