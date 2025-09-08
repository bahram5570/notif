import DiscountCodeContainer from '@components/pages/webView/DiscountCodeContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const DiscountCode = () => {
  return <DiscountCodeContainer />;
};

export default DiscountCode;
