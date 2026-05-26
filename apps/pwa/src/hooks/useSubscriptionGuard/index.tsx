import { useEffect } from 'react';

import { NO_NEED_SUBSCRIPTION_PAGES_LIST } from '@constants/routes.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePathname } from 'next/navigation';

const useSubscriptionGuard = (remainDays?: number) => {
  const router = useCustomRouter();
  const pathname = usePathname() || '';
  const { callEvent } = useAnalytics();

  useEffect(() => {
    if (remainDays === undefined) {
      return;
    }

    if (remainDays <= 0) {
      const isNoNeedSubscription = NO_NEED_SUBSCRIPTION_PAGES_LIST.includes(pathname);

      if (!isNoNeedSubscription) {
        callEvent('Subscription_From_Forced');
        router.push('/protected/subscription');
      }
    }
  }, [remainDays, pathname]);
};

export default useSubscriptionGuard;
