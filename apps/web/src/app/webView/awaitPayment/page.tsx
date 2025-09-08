import AwaitPaymentContainer from '@components/pages/webView/AwaitPaymentContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AwaitPayment = () => {
  return <AwaitPaymentContainer />;
};

export default AwaitPayment;
