import CalendarUntidyContainer from '@components/pages/webView/CalendarUntidyContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const CalendarUntidy = () => {
  return <CalendarUntidyContainer />;
};

export default CalendarUntidy;
