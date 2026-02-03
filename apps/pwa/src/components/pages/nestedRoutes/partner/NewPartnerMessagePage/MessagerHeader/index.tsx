import ArrowIcon from '@assets/shared/icons/arrow.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const MessagerHeader = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ showProgressBar: false, linkTo: -1, id: 'back' });
  };

  return (
    <div
      className="flex items-end flex-col w-full  py-4 px-2 gap-4 mx-auto fixed top-0 left-0 right-0 z-40  "
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex px-4 py-2 w-full justify-end">
        <div className="flex items-center gap-4 min-w-fit">
          <div className="flex flex-row-reverse gap-2 items-center">
            <div className="flex flex-col items-end justify-end">
              <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                گفتگو با همدل
              </CustomTypography>
            </div>
          </div>

          <div className="cursor-pointer flex justify-center items-center w-8 h-8" onClick={onClick}>
            {pageNavigationLoading === 'back' && <CustomSpinner className="border-impo_Surface_Outline" size={28} />}
            {pageNavigationLoading !== 'back' && (
              <ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagerHeader;
