import { AppRouterInstance, NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import useCustomRouter_monitoring from '../useCustomRouter_monitoring';

const useCustomRouter_push = (router: AppRouterInstance) => {
  const startingPointHandler = useCustomRouter_monitoring();

  const push = (href: string, options?: NavigateOptions) => {
    startingPointHandler({
      to: href,
      start: new Date().getTime(),
      from: window.location.pathname + window.location.search,
    });

    router.push(href, options);
  };

  return push;
};

export default useCustomRouter_push;
