import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';

import useCustomRouter_back from './useCustomRouter_back';
import useCustomRouter_push from './useCustomRouter_push';
import useCustomRouter_refresh from './useCustomRouter_refresh';
import useCustomRouter_replace from './useCustomRouter_replace';

export const useCustomRouter = () => {
  const router = useRouter();
  const push = useCustomRouter_push(router);
  const back = useCustomRouter_back(router);
  const refresh = useCustomRouter_refresh(router);
  const replace = useCustomRouter_replace(router);

  return { push, back, refresh, replace };
};
