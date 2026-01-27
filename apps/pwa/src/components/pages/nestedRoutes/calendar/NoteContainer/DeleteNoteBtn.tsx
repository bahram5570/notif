import TrashIcon from '@assets/icons/trash.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

const DeleteNoteBtn = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: 'deleteNote' });

    pageNavigationHandler({
      showProgressBar: true,
      id: 'deleteNote',
    });
  };

  return (
    <div className="w-full flex items-center justify-end" onClick={linkToHandler}>
      <div className="flex items-center  gap-2">
        <Dark_Typography fontSize="Lable_Large" className="text-impo_Error_Error">
          حذف یادداشت
        </Dark_Typography>

        <TrashIcon className="w-6 h-6 stroke-impo_Error_Error" />
      </div>
    </div>
  );
};

export default DeleteNoteBtn;
