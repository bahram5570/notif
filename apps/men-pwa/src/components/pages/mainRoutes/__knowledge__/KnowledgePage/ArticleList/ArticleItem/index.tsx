import { useEffect, useState } from 'react';

import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@repo/core/utils/dates';
import { textShorter } from '@repo/core/utils/scripts';

import { useCulture } from '@repo/core/hooks/useCulture';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import { ActionTypeEnum, ActionTypes } from '@repo/core/providers/WidgetActionsProvider';
import moment from 'moment-jalaali';

import { ArticleItemPropsType } from './type';

const ArticleItem = (props: ArticleItemPropsType) => {
  const { culture } = useCulture();
  const { actionHandler } = useWidgetActions();
  const [currentDate, setCurrentDate] = useState('');

  const linkToHandler = () => {
    const action: ActionTypes = {
      api: '',
      internal: '',
      actionTypes: [],
      actionType: ActionTypeEnum.None,
      nextStep: { type: 0, isDismissible: false, delaySecond: 0, data: null },
    };

    action.actionType = ActionTypeEnum.ExternalRout;
    action.api = props.link2;

    actionHandler(action);
  };

  useEffect(() => {
    const date = new Date(props.pubDate);
    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianDate = moment(date).format('YYYY-MM-DD');
      const gregorianFarsMonth = gregorianFarsiScriptDate(gregorianDate);

      setCurrentDate(gregorianFarsMonth);
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaaliMoment = moment(date).format('jYYYY/jMM/jDD');
      const jalaaliMonth = jalaaliScriptDate(jalaaliMoment);

      setCurrentDate(jalaaliMonth);
    }
  }, [culture.calendarType]);

  return (
    <div className="flex flex-col gap-1" onClick={linkToHandler}>
      <CustomImage src={JSON.parse(props.description)} className="w-[200px] h-[112px] rounded-xl" />
      <div className="flex flex-col items-end">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {textShorter(props.title, 55)}
        </CustomTypography>
        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {currentDate}
        </CustomTypography>
      </div>
    </div>
  );
};

export default ArticleItem;
