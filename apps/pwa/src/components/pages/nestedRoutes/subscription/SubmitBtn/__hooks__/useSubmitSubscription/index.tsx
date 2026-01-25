import useAnalytics from '@hooks/useAnalytics';

import { SubmitHandlerTypes } from './types';
import useBuySubscription from './useBuySubscription';
import useFreeSubscription from './useFreeSubscription';

const useSubmitSubscription = () => {
  const { callEvent } = useAnalytics();
  const { buySubscription, buyLoading } = useBuySubscription();
  const { getFreeSubscription, freeLoading } = useFreeSubscription();

  const submitHandler: SubmitHandlerTypes = (isFree, payload) => {
    callEvent('SubscriptionPayment');
    if (isFree) {
      getFreeSubscription(payload.packageId);
    } else {
      buySubscription(payload);
    }
  };

  const isLoading = buyLoading || freeLoading;

  return { submitHandler, isLoading };
};

export default useSubmitSubscription;
