import AndroidWidgetContainer from '@components/pages/webView/AndroidWidgetContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AndroidWidget = () => {
  return <AndroidWidgetContainer />;
};

export default AndroidWidget;
