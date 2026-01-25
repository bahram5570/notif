import TrashIcon from '@assets/icons/trash.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

const DeletePartner = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div
      className="flex items-center justify-end gap-2 p-3"
      onClick={() => {
        (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', name: 'DeletePartnerModal' }),
          pageNavigationHandler({ showProgressBar: true, id: 'DeletePartner' }));
      }}
    >
      <Dark_Typography fontSize="Lable_Large" className="text-impo_Error_Error">
        حذف همدل من
      </Dark_Typography>
      <TrashIcon className="w-6 h-6 stroke-impo_Error_Error" />
    </div>
  );
};

export default DeletePartner;
