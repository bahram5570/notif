import ArrowIcon from '@assets/shared/shared/icons/arrow.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { ICONS_SIZE } from './constant';

const BackButton = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const id = `BackButton_ShareExperience`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };

  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      style={{ width: ICONS_SIZE, height: ICONS_SIZE }}
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && <CustomSpinner size={28} className="border-impo_Surface_Outline" />}
      {pageNavigationLoading !== id && <ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />}
    </div>
  );
};

export default BackButton;
