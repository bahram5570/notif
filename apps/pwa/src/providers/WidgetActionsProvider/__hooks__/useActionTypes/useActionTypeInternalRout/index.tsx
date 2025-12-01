import { actionRouteConverter } from './__utils__/actionRouteConverter';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { CallInternalRoutTypes } from './types';

const useActionTypeInternalRout = (onActionComplete: () => void) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const callInternalRout: CallInternalRoutTypes = ({ actionInternal }) => {
    const handleRoute = async () => {
      const linkTo = await actionRouteConverter(actionInternal);

      pageNavigationHandler({
        linkTo,
        id: Math.random(),
        showProgressBar: true,
      });
    };

    handleRoute();
  };

  return { callInternalRout };
};

export default useActionTypeInternalRout;
