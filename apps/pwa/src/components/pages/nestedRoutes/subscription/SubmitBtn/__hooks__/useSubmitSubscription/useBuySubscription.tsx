import { setPaymentCookie } from '@utils/cookies';
import { externalLink } from '@utils/navigation';

import { getUserCookie } from '@actions/userCookies.actions';
import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { BuySubscriptionResponseTypes } from './types';

const loadingId = 'buySubscription';

const useBuySubscription = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const toast = useCustomToast();

  const buySubscriptionSuccessHandler = async (v: BuySubscriptionResponseTypes) => {
    const user = await getUserCookie();

    if (!v.isSuccess) {
      return toast.notifyToastHandler({ type: 'error', message: 'مشکلی پیش آمده' });
    }

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
