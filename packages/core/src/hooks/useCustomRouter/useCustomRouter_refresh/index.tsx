import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const useCustomRouter_refresh = (router: AppRouterInstance) => {
  const refresh = () => {
    router.refresh();
  };

  return refresh;
};

export default useCustomRouter_refresh;
