import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import CalendarModal from './CalendarModal';
import DeleteNoteModal from './DeleteNoteModal';
import { NoteModalNameEnums } from './enum';
import { NoteModalPropsType } from './type';

export const NoteModal = ({ time, onChangeHandler }: NoteModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();

  const modalName = getQueryParams('name') as NoteModalNameEnums | null;

  return (
    <CustomModal isSlidingMode={modalName === NoteModalNameEnums.DateTime}>
      {modalName === NoteModalNameEnums.DateTime && <CalendarModal onChangeHandler={onChangeHandler} dateTime={time} />}

      {modalName === NoteModalNameEnums.DeleteNote && <DeleteNoteModal />}
    </CustomModal>
  );
};
