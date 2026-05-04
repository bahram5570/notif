import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { CustomModal } from '../../../ui/CustomModal';
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
