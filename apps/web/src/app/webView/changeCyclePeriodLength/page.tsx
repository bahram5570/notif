import ChangeCyclePeriodLengthContainer from '@components/pages/webView/ChangeCyclePeriodLengthContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const ChangeCyclePeriodLength = () => {
  return <ChangeCyclePeriodLengthContainer />;
};

export default ChangeCyclePeriodLength;
