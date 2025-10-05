import DiscountCodeContainer from '@components/pages/webView/DiscountCodeContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const DiscountCode = () => {
  return <DiscountCodeContainer />;
};

export default DiscountCode;
