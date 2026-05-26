import ArrowIcon from '@assets/shared/icons/arrow.svg';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { CustomSpinner } from '../../ui/CustomSpinner';

export const BackButton = () => {
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ linkTo: -1, id: 'back' });
  };
  return (
    <div className="cursor-pointer flex justify-center items-center w-8 h-8" onClick={onClick}>
      {navigationLoadingId === 'back' && <CustomSpinner size={28} className="border-impo_Surface_Outline" />}
      {navigationLoadingId !== 'back' && <ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />}
    </div>
  );
};
