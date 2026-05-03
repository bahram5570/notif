import SupportIcon from '@assets/icons/support2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SUPPORT_ACTIONS_FOOTER_HEIGHT } from './constants';

const SupportActionsFooter = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const selectHandler = () => {
    newQueryParamsHandler({ [MODALS.SUPPORT_SHEETS]: 'true' });
  };

  return (
    <>
      <div
        dir="rtl"
        style={{ height: SUPPORT_ACTIONS_FOOTER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
        className="
                    fixed 
                    bottom-0 
                    left-0 
                    right-0 
                    mx-auto 
                    p-4 
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    gap-5 
                    rounded-t-2xl
                    bg-impo_Pink_100 
                    dark:bg-impo_Pink_800
                  "
      >
        <div className="w-full flex items-center gap-3">
          <SupportIcon className="w-8 h-auto" />

          <div>
            <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Black">
              مشکلت رو در لیست بالا پیدا نکردی؟
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" className="text-impo_Grey_700 dark:text-impo_Grey_200">
              میتونی با پشتیبان های ما تماس بگیری یا چت کنی
            </CustomTypography>
          </div>
        </div>

        <div className="w-full flex justify-center p-2 rounded-xl bg-impo_Primary_Primary" onClick={selectHandler}>
          <CustomTypography fontSize="Title_Small" className="text-impo_White">
            ارتباط با پشتیبانی
          </CustomTypography>
        </div>
      </div>
    </>
  );
};

export default SupportActionsFooter;
