import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';
import { CalendarWidgetEnums } from '@repo/core/components/calendar';

import { CalendarInitialSelectedDateType } from '../../__hooks__/useCalendar/types';
import SelectedDayNoNote from './SelectedDayNoNote';
import SelectedDayNoteList from './SelectedDayNoteList';
import { SelectedDayNotePropsType } from './type';

const SelectedDayNote = ({ selectedDateInfo }: SelectedDayNotePropsType) => {
  const selectedDayNoteInfo = selectedDateInfo.items.find((item) => item.type === CalendarWidgetEnums.Note);
  const hasNoteData = selectedDayNoteInfo && selectedDayNoteInfo?.data.notes.length > 0;
  const date: CalendarInitialSelectedDateType = selectedDateInfo.gregorianDate;

  return (
    <WidgetCardContainer title="یادداشت امروزت" className="!px-0 !pt-0">
      {hasNoteData && <SelectedDayNoteList noteList={selectedDayNoteInfo.data.notes} date={date} />}
      {!hasNoteData && <SelectedDayNoNote date={date} />}
    </WidgetCardContainer>
  );
};

export default SelectedDayNote;
