import { WIDGET_POPUP } from '../../../../../constants/modal.constants';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';

const usePopupModal = (hasPopup: boolean) => {
  const { getQueryParams } = useQueryParamsHandler();

  const hasQuery = getQueryParams(WIDGET_POPUP) !== null;
  const isPopupModalOpen = hasQuery && hasPopup;

  return { isPopupModalOpen };
};

export default usePopupModal;
