import AwaitPaymentContainer from '@components/pages/webView/AwaitPaymentContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const AwaitPayment = () => {
  return <AwaitPaymentContainer />;
};

export default AwaitPayment;
