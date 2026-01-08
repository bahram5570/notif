import Dark_Typography from '@components/ui/Dark_Typography';
import useSignDateState from '@hooks/__sign__/useSignDateState';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import CreateNewNoteBtn from './CreateNewNoteBtn';
import NoteItem from './NoteItem';
import { SelectedDayNoteListPropsList } from './type';

const SelectedDayNoteList = ({ noteList, date }: SelectedDayNoteListPropsList) => {
  const { changeCurrentDate } = useSignDateState();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    changeCurrentDate(date);

    pageNavigationHandler({
      id: 'noteList',
      showProgressBar: true,
      linkTo: `/protected/note/noteList`,
    });
  };

  const updatedList = noteList.slice(0, 3);

  return (
    <div className="flex flex-col gap-3">
      {updatedList.map((note) => {
        return <NoteItem noteItem={note} key={note.noteId} isNoteListPage={false} />;
      })}

      <div className="flex items-center justify-center " onClick={linkTo}>
        <div className="h-0 w-24 border-[1px] border-impo_Neutral_Surface dark:border-impo_Surface_SurfaceVariant rotate-180" />

        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground text-center mb-1 p-0 w-full">
          مشاهده همه یادداشت‌ها
        </Dark_Typography>

        <div className="h-0 w-24 border-[1px]  border-impo_Neutral_Surface dark:border-impo_Surface_SurfaceVariant rotate-180" />
      </div>

      <CreateNewNoteBtn date={date} />
    </div>
  );
};

export default SelectedDayNoteList;
