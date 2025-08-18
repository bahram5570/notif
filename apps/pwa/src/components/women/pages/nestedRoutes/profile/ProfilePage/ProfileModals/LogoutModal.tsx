import { useTransition } from 'react';

import LogoutIcon from '@assets/icons/logout.svg';

import { deleteUserCookie, setCultureCookie } from '@actions/cookie.actions';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { CULTURE_INITIAL_VALUES } from '@providers/CultureProvider/constants';
import { STORED_NOTIFICATIONS_CACHE_NAME } from '@providers/ServiceWorkerProvider/constants';
import { useRouter } from 'next/navigation';

const LogoutModal = () => {
  const router = useRouter();
  const { colors } = useTheme();
  const [_, startTransition] = useTransition();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === 'LogoutModal';

  const logoutHandler = async () => {
    startTransition(async () => {
      localStorage.clear();
      sessionStorage.clear();
      await deleteUserCookie();
      await setCultureCookie(CULTURE_INITIAL_VALUES);
      await caches.delete(STORED_NOTIFICATIONS_CACHE_NAME);

      pageNavigationHandler({ showProgressBar: false, id: 'LogoutModal', linkTo: '/' });
    });
  };

  return (
    <div className="w-[290px] flex flex-col items-center gap-4">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: colors.Error_ErrorContainer }}
      >
        <LogoutIcon className="w-6 h-auto" style={{ stroke: colors.Error_Error }} />
      </div>

      <Typography scale="Title" size="Medium">
        خروج از کاربری
      </Typography>

      <Typography scale="Body" size="Medium">
        مطمئنی می‌خوای از حساب کاربریت خارج بشی؟
      </Typography>

      <div className="w-full flex items-center justify-between gap-2">
        <Button
          size="medium"
          variant="outline"
          color="FREE-STYLES"
          isLoading={isLoading}
          onClick={logoutHandler}
          contentsColor={colors.Error_Error}
          buttonColor={colors.Error_ErrorContainer}
          style={{ backgroundColor: colors.Error_ErrorContainer }}
        >
          خروج
        </Button>

        <Button variant="fill" size="medium" color="surface" onClick={() => router.back()}>
          خیر
        </Button>
      </div>
    </div>
  );
};

export default LogoutModal;
