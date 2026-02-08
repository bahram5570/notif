import { useEffect, useMemo, useState } from 'react';

import { toGregorianData, toJalaliData } from '@repo/core/utils/dates';

import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';
import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { UseActivationPregnancyTabsTypes } from './types';

const useActivationPregnancyTabs = (props?: UseActivationPregnancyTabsTypes) => {
  const { pregnancyPeriodStart, pregnancyPeriodEnd, giveBirthStart, giveBirthEnd } = useDateIntervals();
  const [tab, setTab] = useState(0);
  const { culture } = useCulture();

  useEffect(() => {
    if (props?.isDelivery) {
      setTab(props.isDelivery);
    }
  }, [props?.isDelivery]);

  const tabHandler = (t: number) => {
    setTab(t);
  };

  const updatedPregnancyDate = useMemo(() => {
    if (props) {
      const data = { date: '', initialTab: props.isDelivery };

      switch (culture.calendarType) {
        case CalendarTypeEnum.Jalali:
          data.date = toJalaliData(props.pregnancyDate);
          break;

        default:
          data.date = props.pregnancyDate;
      }

      return data;
    }

    return null;
  }, [props, culture.calendarType]);

  const startDate = tab === 1 ? giveBirthStart : pregnancyPeriodStart;
  const endDate = tab === 1 ? giveBirthEnd : pregnancyPeriodEnd;

  const isDefaultValueAvailable =
    updatedPregnancyDate && updatedPregnancyDate.initialTab === tab ? updatedPregnancyDate.date : null;

  const defaultDate = isDefaultValueAvailable
    ? isDefaultValueAvailable
    : tab === 1
      ? giveBirthStart
      : pregnancyPeriodEnd;

  const resetKey = `${startDate}-${endDate}`;

  return { tab, tabHandler, startDate, defaultDate, endDate, resetKey };
};

export default useActivationPregnancyTabs;
