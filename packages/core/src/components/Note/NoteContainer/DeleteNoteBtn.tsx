import TrashIcon from '@assets/shared/icons/trash.svg';

import { MODAL_QUERY_NAME } from '../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { CustomTypography } from '../../ui/CustomTypography';
import { NoteModalNameEnums } from './NoteModal/enum';

const DeleteNoteBtn = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: NoteModalNameEnums.DeleteNote });

    pageNavigationHandler({
      navigationType: 'logo',
      id: 'deleteNote',
    });
  };

  return (
    <div className="w-full flex items-center justify-end" onClick={linkToHandler}>
      <div className="flex items-center  gap-2">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Error_Error">
          حذف یادداشت
        </CustomTypography>

        <TrashIcon className="w-6 h-6 stroke-impo_Error_Error" />
      </div>
    </div>
  );
};

export default DeleteNoteBtn;
