import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useNameSelectorFilterModals = (modalQueryName: string) => {
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const isOpenHandler = () => {
    newQueryParamsHandler({ [modalQueryName]: 'true' });
    pageNavigationHandler({ id: modalQueryName });
  };

  const isOpen = getQueryParams(modalQueryName) !== null;
  const isLoading = navigationLoadingId === modalQueryName;

  return { isOpen, isOpenHandler, isLoading };
};

export default useNameSelectorFilterModals;
