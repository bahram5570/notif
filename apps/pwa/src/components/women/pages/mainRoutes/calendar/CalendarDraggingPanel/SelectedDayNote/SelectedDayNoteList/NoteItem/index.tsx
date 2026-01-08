import CheckListIcon from '@assets/icons/checkList.svg';
import { textShorter } from '@utils/scripts';

import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { NoteItemPropsType } from './type';

const NoteItem = ({ noteItem, isNoteListPage }: NoteItemPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'SelectedDayNote',
      linkTo: `/protected/note/addNote?noteId=${noteItem.noteId}`,
    });
  };

  return (
    <div key={noteItem.noteId} onClick={linkToHandler}>
      <div
        data-testid={'note-item'}
        className={`
                    flex 
                    flex-row-reverse 
                    px-3 
                    py-4 
                    rounded-lg 
                    items-center
                    ${isNoteListPage ? 'bg-impo_Neutral_Background' : 'bg-impo_Surface_SurfaceVariant'}
                  `}
      >
        <div className="border-l-2 pl-2">
          <CheckListIcon className="w-6 h-auto stroke-impo_Neutral_OnBackground" />
        </div>

        <div className="pr-2">
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {textShorter(noteItem.title)}
          </Dark_Typography>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
