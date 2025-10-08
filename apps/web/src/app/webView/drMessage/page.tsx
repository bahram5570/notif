import DrMessageContainer from '@components/pages/webView/DrMessageContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const DrMessage = () => {
  return <DrMessageContainer />;
};

export default DrMessage;
