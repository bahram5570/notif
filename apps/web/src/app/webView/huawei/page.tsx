import HuaweiContainer from '@components/pages/webView/HuaweiContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Huawei = () => {
  return <HuaweiContainer />;
};

export default Huawei;
