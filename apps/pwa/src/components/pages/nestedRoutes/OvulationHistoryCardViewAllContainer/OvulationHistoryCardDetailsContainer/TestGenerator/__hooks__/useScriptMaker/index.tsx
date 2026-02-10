import { useMemo } from 'react';

import { kitTestScripts } from '@repo/core/components/Widgets/KitTests';
import { gregorianFarsiScriptDate, jalaaliScriptDate, toJalaliData } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import { TestGeneratorProps } from '../../types';

const useScriptMaker = (props: TestGeneratorProps) => {
  const { culture } = useCulture();

  return useMemo(() => {
    const output = { resultScript: '', dateScript: '' };

    if (props.result < 0.1) {
      output.resultScript = kitTestScripts.ovulation.resultLow;
    }
    if (props.result > 0.1 && props.result < 0.9) {
      output.resultScript = kitTestScripts.ovulation.resultAverage;
    }
    if (props.result >= 0.9) {
      output.resultScript = kitTestScripts.ovulation.resultHigh;
    }

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        output.dateScript = jalaaliScriptDate(toJalaliData(props.createTime));
        break;

      case CalendarTypeEnum.Gregorian:
        output.dateScript = gregorianFarsiScriptDate(moment(props.createTime, 'YYYY-MM-DD').format('YYYY-MM-DD'));
        break;

      default:
        output.dateScript = jalaaliScriptDate(toJalaliData(props.createTime));
        break;
    }

    return output;
  }, [culture.calendarType]);
};

export default useScriptMaker;
