import { useContext } from 'react';

import { PageNavigationContext } from '../../providers/PageNavigationProvider/PageNavigationProvider';

export const useRouteSequence = () => {
  const { sequenceHandler } = useContext(PageNavigationContext);
  return { sequenceHandler };
};
