import { AppRouterInstance, NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const useCustomRouter_replace = (router: AppRouterInstance) => {
  const replace = (href: string, options?: NavigateOptions) => {
    router.replace(href, options);
  };

  return replace;
};

export default useCustomRouter_replace;
