import IosWidgetContainer from '@components/pages/webView/IosWidgetContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const IosWidget = () => {
  return <IosWidgetContainer />;
};

export default IosWidget;
