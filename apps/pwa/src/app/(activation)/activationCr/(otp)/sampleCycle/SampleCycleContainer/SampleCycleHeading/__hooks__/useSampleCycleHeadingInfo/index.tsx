import { useMemo } from 'react';

import { currentDate, gregorianFarsiMonthNames, jalaaliMonthNames, toJalaliData } from '@utils/dates';

import { GoalNamesEnum } from '@constants/activation.constants';
import { CalendarTypeEnum } from '@constants/date.constants';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';
import useCulture from '@hooks/useCulture';

import { UseSampleCycleHeadingInfoProps } from './types';

const useSampleCycleHeadingInfo = ({ payload }: UseSampleCycleHeadingInfoProps) => {
  const { culture } = useCulture();
  const { goalInfo } = useGoalFinder({ periodStatus: payload.periodStatus, status: payload.status });

  const headingInfo = useMemo(() => {
    let text = '';
    if (goalInfo.selectedGoal === GoalNamesEnum.PREGNANCY) {
      if (payload.isDeliveryDate) {
        text = `تاریخ زایمان وارد شده: ${payload.pregnancyDate}`;
      } else {
        text = `شروع آخرین پریود وارد شده: ${payload.pregnancyDate}`;
      }
    } else {
      let startPeriodDate = payload.startPeriodDate;

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        startPeriodDate = toJalaliData(startPeriodDate);
      }

      text = `شروع آخرین پریود وارد شده: ${startPeriodDate}`;
    }

    const list = {
      [GoalNamesEnum.PREGNANCY]: {
        text,
        backgroundColor: 'bg-impo_Orange_600 dark:bg-impo_Orange_300',
        textColor: 'text-impo_Orange_200 dark:text-impo_Orange_700',
      },
      [GoalNamesEnum.INTENTION]: {
        text,
        backgroundColor: 'bg-impo_Cyan_600 dark:bg-impo_Cyan_300',
        textColor: 'text-impo_Cyan_200 dark:text-impo_Cyan_700',
      },
      [GoalNamesEnum.TRACKER]: {
        text,
        backgroundColor: 'bg-impo_Pink_600 dark:bg-impo_Pink_300',
        textColor: 'text-impo_Pink_200 dark:text-impo_Pink_700',
      },
    };

    return list[goalInfo.selectedGoal];
  }, [goalInfo.selectedGoal, culture.calendarType]);

  const todayScript = useMemo(() => {
    const { jDay, jMonth, jYear, gDay, gMonth, gYear } = currentDate();
    let result = '';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        result = `${jDay} ${jalaaliMonthNames(jMonth - 1)} ${jYear}`;
        break;

      case CalendarTypeEnum.Gregorian:
        result = `${gDay} ${gregorianFarsiMonthNames(gMonth - 1)} ${gYear}`;
        break;
    }

    return `پیش‌بینی برای امروز ${result} :`;
  }, [culture.calendarType]);

  return { headingInfo, todayScript };
};

export default useSampleCycleHeadingInfo;
