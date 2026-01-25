import { CalendarWidgetEnums, DayTypeEnums } from '../../../__hooks__/useCalendarGetData/CalendarEnums';
import { CalendarDayInfoTypes, UseCalendarDayInfoProps } from './types';

const useCalendarDayInfo = (day?: UseCalendarDayInfoProps) => {
  const item = day?.items?.find((item) => item.type === CalendarWidgetEnums.Cycle)?.data;
  const isBirthday = day ? day.items?.some((i) => i.type === CalendarWidgetEnums.Birthday) : false;
  const isGiveBirth = false;

  const calendarDayInfo: CalendarDayInfoTypes = {
    backgroundColor: 'bg-impo_Surface_SurfaceVariant',
    birthIconColor: 'fill-impo_Neutral_OnBackground',
    dayTypeColor: 'text-impo_Neutral_OnBackground',
    dayColor: 'text-impo_Neutral_OnBackground',
    dayTitle: item?.dayTitle || '',
    isGiveBirth,
    isBirthday,
  };

  switch (item?.dayType) {
    case DayTypeEnums.White:
      calendarDayInfo.dayColor = 'text-impo_Neutral_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Neutral_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Surface_OnSurfaceVariant';
      calendarDayInfo.backgroundColor = 'bg-impo_Surface_SurfaceVariant';
      break;

    case DayTypeEnums.GiveBirth:
      calendarDayInfo.dayColor = 'text-impo_Orange_300';
      calendarDayInfo.birthIconColor = 'fill-impo_Orange_300';
      calendarDayInfo.dayTypeColor = 'text-impo_Orange_300';
      calendarDayInfo.backgroundColor = 'bg-impo_Green_50';
      calendarDayInfo.isGiveBirth = true;
      break;

    case DayTypeEnums.Breastfeeding:
      calendarDayInfo.dayColor = 'text-impo_Calendar_Breastfeeding_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_Breastfeeding_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Blue_500 dark:text-impo_Blue_400';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Breastfeeding_Background1';
      break;

    case DayTypeEnums.SecondaryBreastfeeding:
      calendarDayInfo.dayColor = 'text-impo_Calendar_Breastfeeding_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_Breastfeeding_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Calendar_Breastfeeding_OnBackground';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Breastfeeding_Background2';
      break;

    case DayTypeEnums.Pregnancy:
      calendarDayInfo.dayColor = 'text-impo_Calendar_Pregnancy_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_Pregnancy_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Orange_500 dark:text-impo_Orange_400';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Pregnancy_Background1';
      break;

    case DayTypeEnums.SecondaryPregnancy:
      calendarDayInfo.dayColor = 'text-impo_Calendar_Pregnancy_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_Pregnancy_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Calendar_Pregnancy_OnBackground';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Pregnancy_Background2';
      break;

    case DayTypeEnums.Ovulation:
      calendarDayInfo.dayColor = 'text-impo_White';
      calendarDayInfo.birthIconColor = 'fill-impo_White';
      calendarDayInfo.dayTypeColor = 'text-impo_Cyan_500 dark:text-impo_Cyan_400';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Fertility_Ovulation';
      break;

    case DayTypeEnums.Fertility:
      calendarDayInfo.dayColor = 'text-impo_Calendar_Fertility_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_Fertility_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Cyan_500 dark:text-impo_Cyan_400';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Fertility_Background';
      break;

    case DayTypeEnums.Period:
      calendarDayInfo.dayColor = 'text-impo_Calendar_Period_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_Period_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Pink_500';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_Period_Background';
      break;

    case DayTypeEnums.Pms:
      calendarDayInfo.dayColor = 'text-impo_Calendar_PMS_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Calendar_PMS_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Purple_500 dark:text-impo_Purple_400';
      calendarDayInfo.backgroundColor = 'bg-impo_Calendar_PMS_Background';
      break;

    case DayTypeEnums.LatePeriod:
      calendarDayInfo.dayColor = 'text-impo_Black';
      calendarDayInfo.birthIconColor = 'fill-impo_Grey_800';
      calendarDayInfo.dayTypeColor = 'text-impo_Grey_800 dark:text-impo_Grey_200 ';
      calendarDayInfo.backgroundColor = 'bg-impo_Grey_200';
      break;

    default:
      calendarDayInfo.dayColor = 'text-impo_Neutral_OnBackground';
      calendarDayInfo.birthIconColor = 'fill-impo_Neutral_OnBackground';
      calendarDayInfo.dayTypeColor = 'text-impo_Surface_OnSurfaceVariant';
      calendarDayInfo.backgroundColor = 'bg-impo_Surface_SurfaceVariant';
      break;
  }

  return calendarDayInfo;
};

export default useCalendarDayInfo;
