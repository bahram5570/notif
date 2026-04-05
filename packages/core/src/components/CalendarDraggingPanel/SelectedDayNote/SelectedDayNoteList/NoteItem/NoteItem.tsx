import CheckListIcon from '@assets/icons/checkList.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { NoteItemPropsType } from './type';

export const NoteItem = ({ noteItem, isNoteListPage }: NoteItemPropsType) => {
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
                    ${isNoteListPage ? 'bg-impo_Neutral_Background' : 'bg-impo_Neutral_Surface'}
                  `}
      >
        <div className="border-l-2 pl-2  border-l-impo_Surface_OutlineVariant">
          <CheckListIcon className="w-6 h-auto stroke-impo_Neutral_OnBackground" />
        </div>

        <div className="pr-2">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {textShorter(noteItem.title)}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};
