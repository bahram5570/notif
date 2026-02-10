import { usePageNavigationLoading } from '../../../../../hooks/usePageNavigationLoading';
import { CallInternalRoutTypes, UseActionTypeInternalRoutTypes } from './types';

const useActionTypeInternalRout = ({
  internalRoutesConverter,
  onActionComplete,
  onCallBack,
}: UseActionTypeInternalRoutTypes) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const callInternalRout: CallInternalRoutTypes = ({ actionInternal }) => {
    const handleRoute = async () => {
      const linkTo = await internalRoutesConverter(actionInternal);

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
