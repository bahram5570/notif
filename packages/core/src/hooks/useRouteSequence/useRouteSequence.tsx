import { useContext } from 'react';

import { RouteSequenceContext } from '../../providers/RouteSequenceProvider';

export const useRouteSequence = () => {
  return useContext(RouteSequenceContext);
};
