import { useMemo } from 'react';

import { currentDate, gregorianFarsiMonthNames, jalaaliMonthNames, toJalaliData } from '@utils/dates';

import { GoalNamesEnum } from '@constants/activation.constants';
import { CalendarTypeEnum } from '@constants/date.constants';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';

import { UseSampleCycleHeadingInfoProps } from './types';

const useSampleCycleHeadingInfo = ({ payload }: UseSampleCycleHeadingInfoProps) => {
  const { colors } = useTheme();
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
      [GoalNamesEnum.PREGNANCY]: { text, backgroundColor: colors.Orange_600, textColor: colors.Orange_200 },
      [GoalNamesEnum.INTENTION]: { text, backgroundColor: colors.Cyan_600, textColor: colors.Cyan_200 },
      [GoalNamesEnum.TRACKER]: { text, backgroundColor: colors.Pink_600, textColor: colors.Pink_200 },
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
