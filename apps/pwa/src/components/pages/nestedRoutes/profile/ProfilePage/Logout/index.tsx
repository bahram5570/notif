import LogoutIcon from '@assets/icons/profile/logout.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@repo/core/constants/app.contants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PROFILE_MODAL_QUERY_NAME } from '../ProfileLinkList/constants';
import { ProfileModalNameEnums } from '../ProfileModals/enum';

const LogOut = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      [PROFILE_MODAL_QUERY_NAME]: ProfileModalNameEnums.Logout,
    });

    pageNavigationHandler({ showProgressBar: false, id: ProfileModalNameEnums.Logout });
  };

  const isLoading = pageNavigationLoading === ProfileModalNameEnums.Logout;

  return (
    <div className="flex justify-center">
      <div
        className="flex items-center gap-2 px-6 py-2 rounded-full border-[1px] select-none cursor-pointer my-9 border-impo_Surface_OutlineVariant"
        onClick={selectHandler}
      >
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          خروج از حساب کاربری
        </CustomTypography>

        {isLoading && <CustomSpinner size={24} />}
        {!isLoading && <LogoutIcon className="w-6 h-auto stroke-impo_Neutral_OnBackground" />}
      </div>
    </div>
  );
};

export default LogOut;
