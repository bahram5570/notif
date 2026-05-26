import TrashIcon from '@assets/shared/icons/trash.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const DeletePartner = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div
      className="flex items-center justify-end gap-2 p-3"
      onClick={() => {
        (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: 'DeletePartnerModal' }),
          pageNavigationHandler({ navigationType: 'logo', id: 'DeletePartner' }));
      }}
    >
      <CustomTypography fontSize="Lable_Large" className="text-impo_Error_Error">
        حذف همدل
      </CustomTypography>
      <TrashIcon className="w-6 h-6 stroke-impo_Error_Error" />
    </div>
  );
};

export default DeletePartner;
