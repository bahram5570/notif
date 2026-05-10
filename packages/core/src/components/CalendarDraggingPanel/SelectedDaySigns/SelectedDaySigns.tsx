import { WidgetCardContainer } from '../../../components/Widgets/WidgetCardContainer';
import { currentDate } from '../../../utils/dates';

import moment from 'moment-jalaali';

import { SelectedDaySignsContainer } from './SelectedDaySignsContainer';
import { SelectedDaySignsNotAllowed } from './SelectedDaySignsNotAllowed';
import { SelectedDaySignsProps } from './types';

const { gDate } = currentDate();

export const SelectedDaySigns = ({ selectedDateInfo }: SelectedDaySignsProps) => {
  const todayMoment = moment(gDate, 'YYYY-MM-DD');
  const selectedDayMoment = moment(selectedDateInfo.gregorianDate, 'YYYY-MM-DD');
  const isAfterToday = selectedDayMoment.isAfter(todayMoment);

  return (
    <>
      <WidgetCardContainer title="نشانه های امروز" className="!px-0 !pt-0">
        {isAfterToday && <SelectedDaySignsNotAllowed />}
        {!isAfterToday && <SelectedDaySignsContainer selectedDateInfo={selectedDateInfo} />}
      </WidgetCardContainer>
    </>
  );
};
