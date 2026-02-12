import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useInitailSelectedDate = (routes: string[]) => {
  const [calendarInitailSelectedDate, setCalendarInitailSelectedDate] = useState<string | null>(null);
  const pathname = usePathname() || '';

  const changeCurrentDate = (date: string) => {
    setCalendarInitailSelectedDate(date);
  };

  useEffect(() => {
    const isNeedDatePath = routes.some((item) => pathname.includes(item));

    if (!isNeedDatePath) setCalendarInitailSelectedDate('');
  }, [pathname]);

  return { calendarInitailSelectedDate, changeCurrentDate };
};

export default useInitailSelectedDate;
