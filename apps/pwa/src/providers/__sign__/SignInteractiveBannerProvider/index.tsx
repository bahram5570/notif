'use client';

import { createContext, useEffect, useState } from 'react';

import { NEED_LOADING_SIGN_INTERACTIVE_BANNER_LIST } from '@constants/routes.constants';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';
import { usePathname, useRouter } from 'next/navigation';

import { SignInteractiveBannerContextType } from './type';

export const SignInteractiveBannerContext = createContext<SignInteractiveBannerContextType>({
  isLoadedHandler: () => {},
  interactiveBannerActionHandler: () => {},
});

const SignInteractiveBannerProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname() || '';
  const { actionHandler } = useWidgetActions();
  const [currentAction, setCurrentAction] = useState<ActionTypes | null>(null);

  const needLoading = NEED_LOADING_SIGN_INTERACTIVE_BANNER_LIST.includes(pathname);
  const isSignsPath = pathname === '/protected/signs';

  const handleAction = () => {
    setTimeout(() => {
      if (currentAction) {
        setCurrentAction(null);
        actionHandler(currentAction);
      }
    }, 500);
  };

  const interactiveBannerActionHandler = (v: ActionTypes) => {
    router.back();
    setCurrentAction(v);
  };

  const isLoadedHandler = () => {
    if (currentAction && needLoading) {
      handleAction();
    }
  };

  useEffect(() => {
    if (!isSignsPath && currentAction !== null && !needLoading) {
      handleAction();
    }
  }, [pathname, currentAction]);

  return (
    <SignInteractiveBannerContext.Provider value={{ isLoadedHandler, interactiveBannerActionHandler }}>
      <>{children}</>
    </SignInteractiveBannerContext.Provider>
  );
};

export default SignInteractiveBannerProvider;
