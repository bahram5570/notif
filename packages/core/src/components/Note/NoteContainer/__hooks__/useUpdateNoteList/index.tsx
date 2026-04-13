import { currentDate } from '../../../../../utils/dates';

import { useCustomReactQuery } from '../../../../../hooks/useCustomReactQuery';
import { useSignDateState } from '../../../../../hooks/useSignDateState';
import { CalendarNoteType, CalendarWidgetEnums, InfoCalendarResponseTypes } from '../../../../calendar';
import { UseUpdateNoteListPropsType } from './type';

const { gDate } = currentDate();

const useUpdateNoteList = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { calendarInitailSelectedDate } = useSignDateState();

  const updateNoteList = (props: UseUpdateNoteListPropsType) => {
    const data = getQuery<InfoCalendarResponseTypes>({ queryKey: ['infoCalendar'] });
    const currentDate = data?.days[calendarInitailSelectedDate || gDate];
    if (currentDate) {
      const noteList = currentDate.items.find((i) => i.type === CalendarWidgetEnums.Note);

      if (noteList) {
        let currentNote = noteList.data.notes.find((note) => note.noteId === props.noteId);

        if (currentNote) {
          currentNote = { ...props, files: [], reminderId: 0, noteId: props.noteId || '' };
        }
      } else {
        const NoteItems: CalendarNoteType = {
          type: CalendarWidgetEnums.Note,
          data: {
            notes: [{ ...props, files: [], reminderId: 0, noteId: props.noteId || '' }],
          },
        };
        currentDate.items.push(NoteItems);
      }
    }
    updateQuery({ queryKey: ['infoCalendar'], payload: { ...data } });
  };

  return { updateNoteList };
};

export default useUpdateNoteList;
