import LinkIcon from '@assets/icons/calendarSignLink.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { CustomContainerPropsType } from './type';

const CustomContainer = ({ allBtnLink, children, plusIconLink, title, showAllBtn }: CustomContainerPropsType) => {
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const newHandler = () => {
    pageNavigationHandler({
      navigationType: 'logo',
      linkTo: `${plusIconLink}`,
      id: `cutomContainer${plusIconLink}`,
    });
  };

  const showAllHandler = () => {
    pageNavigationHandler({ id: allBtnLink, linkTo: `${allBtnLink}` });
  };

  const isLoading = navigationLoadingId === allBtnLink;

  return (
    <div className="bg-impo_Neutral_Background rounded-2xl p-2 flex flex-col">
      <div onClick={newHandler}>
        <div className="w-full flex flex-row-reverse items-center justify-between h-fit p-3">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {title}
          </CustomTypography>

          <div className="relative cursor-pointer">
            <LinkIcon className="w-10 h-auto" />
          </div>
        </div>

        <>{children}</>
      </div>

      {showAllBtn && (
        <div
          onClick={showAllHandler}
          className="
                      flex 
                      items-center 
                      justify-center 
                      gap-2 
                      px-6 
                      py-2 
                      my-2
                      rounded-full 
                      border-[1px] 
                      border-impo_Neutral_Surface 
                      select-none 
                      cursor-pointer 
                      bg-impo_Neutral_Surface 
                      z-20 
                    "
        >
          {!isLoading && (
            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              مشاهده همه تست‌های انجام شده
            </CustomTypography>
          )}

          {isLoading && <CustomSpinner size={20} className="border-impo_Neutral_OnBackground" />}
        </div>
      )}
    </div>
  );
};

export default CustomContainer;
