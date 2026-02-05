import { currentDate } from '@repo/core/utils/dates';

import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import moment from 'moment-jalaali';

import SelectedDaySignsContainer from './SelectedDaySignsContainer';
import SelectedDaySignsNotAllowed from './SelectedDaySignsNotAllowed';
import { SelectedDaySignsProps } from './types';

const { gDate } = currentDate();

const SelectedDaySigns = ({ selectedDateInfo }: SelectedDaySignsProps) => {
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

export default SelectedDaySigns;
