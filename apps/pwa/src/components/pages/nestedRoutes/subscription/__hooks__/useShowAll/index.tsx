import { useState } from 'react';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { ShowAllHandlerTypes } from './types';

const useShowAll = () => {
  const { callEvent } = useAnalytics();
  const [showAll, setShowAll] = useState(false);

  const showAllHandler: ShowAllHandlerTypes = () => {
    callEvent('SubscriptionLoadMore');
    setShowAll(true);
  };

  return { showAll, showAllHandler };
};

export default useShowAll;
