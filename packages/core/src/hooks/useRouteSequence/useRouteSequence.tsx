import { useContext } from 'react';

import { PageNavigationContext } from '../../providers/PageNavigationProvider';

export const useRouteSequence = () => {
  const { sequenceHandler } = useContext(PageNavigationContext);
  return { sequenceHandler };
};
