import CalendarUntidyContainer from '@components/pages/webView/CalendarUntidyContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const CalendarUntidy = () => {
  return <CalendarUntidyContainer />;
};

export default CalendarUntidy;
