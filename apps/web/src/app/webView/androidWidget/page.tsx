import AndroidWidgetContainer from '@components/pages/webView/AndroidWidgetContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const AndroidWidget = () => {
  return <AndroidWidgetContainer />;
};

export default AndroidWidget;
