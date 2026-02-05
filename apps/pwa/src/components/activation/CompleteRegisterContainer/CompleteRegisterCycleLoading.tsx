import { storeSplashHandler } from '@providers/SplashProvider/utils';

import { setUserCookie, setUserInfoCookie } from '@actions/userCookies.actions';
import ProgressCycleLoading from '@components/ProgressCycleLoading';
import { useRouteSequence } from '@repo/core/hooks/useRouteSequence';

import { CompleteRegisterCycleLoadingProps } from './types';

const CompleteRegisterCycleLoading = ({
  createCycleImage,
  clearStorage,
  fetchedUser,
}: CompleteRegisterCycleLoadingProps) => {
  const { sequenceHandler } = useRouteSequence();

  const completeHandler = async () => {
    // # Don't change the order
    await setUserCookie(fetchedUser.userCookie);
    await setUserInfoCookie(fetchedUser.userInfoCookie);

    if (clearStorage) {
      sessionStorage.clear();
    }

    storeSplashHandler();
    sequenceHandler([`/protected/cycle`, `/protected/cycle`, `/protected/cycle`]);
  };

  return (
    <ProgressCycleLoading
      isSuccess={true}
      image={createCycleImage}
      onComplete={completeHandler}
      titles={{
        main: 'تا ساخته شدن چرخه متناسب با اطلاعاتی که وارد کردی، چند لحظه صبر کن',
        subTitle1: 'در حال آماده سازی برنامه',
        subTitle2: 'متناسب با اطلاعات شما',
      }}
    />
  );
};

export default CompleteRegisterCycleLoading;
