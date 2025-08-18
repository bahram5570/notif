import { useState } from 'react';

import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';

const useActivationPregnancyTabs = () => {
  const { pregnancyPeriodStart, pregnancyPeriodEnd, giveBirthStart, giveBirthEnd } = useDateIntervals();
  const [tab, setTab] = useState(0);

  const tabHandler = (t: number) => {
    setTab(t);
  };

  const startDate = tab === 1 ? giveBirthStart : pregnancyPeriodStart;
  const defaultDate = tab === 1 ? giveBirthStart : pregnancyPeriodEnd;
  const endDate = tab === 1 ? giveBirthEnd : pregnancyPeriodEnd;

  return { tab, tabHandler, startDate, defaultDate, endDate };
};

export default useActivationPregnancyTabs;
