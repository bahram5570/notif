import { WidgetCardContainer } from '../../../components/Widgets/WidgetCardContainer';

import { CalendarWidgetEnums } from '../../calendar/CalendarEnums';
import { CalendarInitialSelectedDateType } from '../types';
import { SelectedDayNoNote } from './SelectedDayNoNote';
import { SelectedDayNoteList } from './SelectedDayNoteList';
import { SelectedDayNotePropsType } from './type';

export const SelectedDayNote = ({ selectedDateInfo }: SelectedDayNotePropsType) => {
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
