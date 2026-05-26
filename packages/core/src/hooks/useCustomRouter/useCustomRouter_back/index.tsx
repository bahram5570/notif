import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const useCustomRouter_back = (router: AppRouterInstance) => {
  const back = () => {
    router.back();
  };

  return back;
};

export default useCustomRouter_back;
