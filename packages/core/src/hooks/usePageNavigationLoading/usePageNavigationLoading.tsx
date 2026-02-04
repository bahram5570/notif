import { useContext } from 'react';

import { PageNavigationContext } from '../../providers/PageNavigationProvider';

export const usePageNavigationLoading = () => {
  const { pageNavigationHandler, pageNavigationLoading } = useContext(PageNavigationContext);
  return { pageNavigationHandler, pageNavigationLoading };
};
