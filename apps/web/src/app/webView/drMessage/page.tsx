import DrMessageContainer from '@components/pages/webView/DrMessageContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const DrMessage = () => {
  return <DrMessageContainer />;
};

export default DrMessage;
