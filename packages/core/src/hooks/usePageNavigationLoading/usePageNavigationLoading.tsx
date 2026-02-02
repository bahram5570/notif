import { useContext } from 'react';

import { PageNavigationLoadingContext } from '../../providers/PageNavigationLoadingProvider';

export const usePageNavigationLoading = () => {
  return useContext(PageNavigationLoadingContext);
};
