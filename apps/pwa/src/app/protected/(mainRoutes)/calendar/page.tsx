'use client';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('@components/pages/mainRoutes/calendar/CalendarPage'), {
  ssr: false,
});

const Calendar = () => {
  return <DynamicComponentWithNoSSR />;
};

export default Calendar;
