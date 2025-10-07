import XiaomiWidgetContainer from '@components/pages/webView/XiaomiWidgetContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const XiaomiWidget = () => {
  return <XiaomiWidgetContainer />;
};

export default XiaomiWidget;
