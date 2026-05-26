import { externalLink } from '@repo/core/utils/navigation';
import { pwaHttp } from '@repo/core/utils/pwaHttp';

import { getUserCookie } from '@actions/userCookies.actions';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { BuySubscriptionResponseTypes } from './types';

const loadingId = 'buySubscription';

const useBuySubscription = () => {
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();
  const toast = useCustomToast();

  const buySubscriptionSuccessHandler = async (v: BuySubscriptionResponseTypes) => {
    const user = await getUserCookie();

    if (!v.isSuccess) {
      return toast.notifyToastHandler({ type: 'error', message: 'مشکلی پیش آمده' });
    }

    if (v.isSuccess) {
      externalLink(`https://web.impo.app/financial/AsanPardakht/${v.token}/${user?.identity}`);
    }
  };

  const buySubscription = async (payload: { packageId: string; value: number }) => {
    const { data } = await pwaHttp<BuySubscriptionResponseTypes>({
      method: 'GET',
      url: `finantial/subscribtionweb/${payload.packageId}/${payload.value}`,
    });

    if (data) {
      buySubscriptionSuccessHandler(data);
    }

    pageNavigationHandler({ id: loadingId });
  };

  const buyLoading = navigationLoadingId === loadingId;

  return { buySubscription, buyLoading };
};

export default useBuySubscription;
