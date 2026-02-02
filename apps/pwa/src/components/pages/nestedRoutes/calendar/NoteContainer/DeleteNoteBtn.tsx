import TrashIcon from '@assets/icons/trash.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

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
        <CustomTypography fontSize="Lable_Large" className="text-impo_Error_Error">
          حذف یادداشت
        </CustomTypography>

        <TrashIcon className="w-6 h-6 stroke-impo_Error_Error" />
      </div>
    </div>
  );
};

export default DeleteNoteBtn;
