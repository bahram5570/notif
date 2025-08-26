import { setPaymentCookie } from '@utils/cookies';
import { externalLink } from '@utils/navigation';

import { gggetUserCookie } from '@actions/cookie.actions';
import useApi from '@hooks/useApi';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { BuySubscriptionResponseTypes } from './types';

const loadingId = 'buySubscription';

const useBuySubscription = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const buySubscriptionSuccessHandler = async (v: BuySubscriptionResponseTypes) => {
    const user = await gggetUserCookie();

    if (v.isSuccess) {
      setPaymentCookie({ route: '/protected/cycle' });
      externalLink(`https://web.impo.app/financial/AsanPardakht/${v.token}/${user?.identity}`);
    }
  };

  const { callApi } = useApi<BuySubscriptionResponseTypes>({
    method: 'POST',
    api: 'financial/subscribtiondiscount',
    onSuccess: buySubscriptionSuccessHandler,
  });

  const buySubscription = (payload?: object) => {
    callApi(payload);
    pageNavigationHandler({ showProgressBar: false, id: loadingId });
  };

  const buyLoading = pageNavigationLoading === loadingId;

  return { buySubscription, buyLoading };
};

export default useBuySubscription;
