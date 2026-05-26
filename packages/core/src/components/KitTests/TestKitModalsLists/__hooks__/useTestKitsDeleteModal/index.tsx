import { TEST_KITS_LIST_DELETE } from '../../../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import { OpenDeleteModalHandlerTypes } from './types';

const useTestKitsDeleteModal = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const openDeleteModalHandler: OpenDeleteModalHandlerTypes = (v) => {
    pageNavigationHandler({ navigationType: 'logo', id: v.createTime });
    newQueryParamsHandler({ [TEST_KITS_LIST_DELETE]: JSON.stringify(v) });
  };

  return { openDeleteModalHandler };
};

export default useTestKitsDeleteModal;
