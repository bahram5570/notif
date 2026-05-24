import { useContext } from 'react';

import { PageNavigationContext } from '../../providers/PageNavigationProvider/PageNavigationProvider';

export const usePageNavigationLoading = () => {
  const { pageNavigationHandler, navigationLoadingId } = useContext(PageNavigationContext);
  return { pageNavigationHandler, navigationLoadingId };
};
