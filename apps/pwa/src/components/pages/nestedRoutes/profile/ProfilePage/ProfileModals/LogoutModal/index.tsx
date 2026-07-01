import LogoutIcon from '@assets/icons/profile/logout.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { handleClearStorages } from '@repo/core/utils/system';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const LogoutModal = () => {
  const router = useCustomRouter();
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const logoutHandler = async () => {
    await handleClearStorages();
    pageNavigationHandler({ id: 'LogoutModal', linkTo: '/' });
  };

  const isLoading = navigationLoadingId === 'LogoutModal';

  return (
    <div className="w-[290px] flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-impo_Error_ErrorContainer">
        <LogoutIcon className="w-6 h-auto stroke-impo_Error_Error" />
      </div>

      <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Medium">
        خروج از کاربری
      </CustomTypography>

      <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
        مطمئنی می‌خوای از حساب کاربریت خارج بشی؟
      </CustomTypography>

      <div className="w-full flex items-center justify-between gap-2">
        <CustomButton
          isLoading={isLoading}
          fontSize="Lable_Large"
          onClick={logoutHandler}
          spinnerClassName="border-impo_Error_Error"
          className="!text-impo_Error_Error !bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer"
        >
          خروج
        </CustomButton>

        <CustomButton
          fontSize="Lable_Large"
          onClick={() => router.back()}
          className="!text-impo_Neutral_OnSurface !border-impo_Neutral_Surface !bg-impo_Neutral_Surface "
        >
          خیر
        </CustomButton>
      </div>
    </div>
  );
};

export default LogoutModal;
