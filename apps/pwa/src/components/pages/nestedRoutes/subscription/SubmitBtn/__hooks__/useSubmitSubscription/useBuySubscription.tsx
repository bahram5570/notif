import { externalLink } from '@repo/core/utils/navigation';

import { getUserCookie, setPaymentCookie } from '@actions/userCookies.actions';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

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
      await setPaymentCookie({ route: '/protected/cycle' });
      externalLink(`https://web.impo.app/financial/AsanPardakht/${v.token}/${user?.identity}`);
    }
  };

  const { callApi } = usePwaApi<BuySubscriptionResponseTypes>({
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
