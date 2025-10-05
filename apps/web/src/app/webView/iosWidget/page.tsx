import IosWidgetContainer from '@components/pages/webView/IosWidgetContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const IosWidget = () => {
  return <IosWidgetContainer />;
};

export default IosWidget;
