import LogoutIcon from '@assets/icons/logout.svg';

import { deleteUserCookie, setCultureCookie } from '@actions/cookie.actions';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { CULTURE_INITIAL_VALUES } from '@providers/CultureProvider/constants';
import { STORED_NOTIFICATIONS_CACHE_NAME } from '@providers/ServiceWorkerProvider/constants';
import { useRouter } from 'next/navigation';

const LogoutModal = () => {
  const router = useRouter();

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === 'LogoutModal';

  const logoutHandler = async () => {
    localStorage.clear();
    sessionStorage.clear();
    await deleteUserCookie();
    await setCultureCookie(CULTURE_INITIAL_VALUES);
    await caches.delete(STORED_NOTIFICATIONS_CACHE_NAME);

    pageNavigationHandler({ showProgressBar: false, id: 'LogoutModal', linkTo: '/' });
  };

  return (
    <div className="w-[290px] flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-impo_Error_ErrorContainer">
        <LogoutIcon className="w-6 h-auto stroke-impo_Error_Error" />
      </div>
      <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Title_Medium">
        خروج از کاربری
      </Dark_Typography>
      <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
        مطمئنی می‌خوای از حساب کاربریت خارج بشی؟
      </Dark_Typography>

      <div className="w-full flex items-center justify-between gap-2">
        <Dark_Button
          isLoading={isLoading}
          onClick={logoutHandler}
          className="!text-impo_Error_Error !bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer"
          fontSize="Lable_Large"
        >
          خروج
        </Dark_Button>
        <Dark_Button
          onClick={() => router.back()}
          className="!text-impo_Neutral_OnSurface !border-impo_Neutral_Surface !bg-impo_Neutral_Surface "
          fontSize="Lable_Large"
        >
          خیر
        </Dark_Button>
      </div>
    </div>
  );
};

export default LogoutModal;
