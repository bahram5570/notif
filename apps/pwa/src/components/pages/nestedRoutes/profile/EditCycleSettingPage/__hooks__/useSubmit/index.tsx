import { CycleThemeEnum } from '@services/loginServices/enum';

import { getUserInfoCookie, setUserInfoCookie } from '@actions/userCookies.actions';
import { APP_VERSION } from '@constants/app.constants';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const loadingId = 'EditCycleContainer';

const useSubmit = (selectedValue: CycleThemeEnum) => {
  const { updateProfileData } = useGetProfileData();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const successHandler = async () => {
    const user = await getUserInfoCookie();

    if (user && user?.cycleTheme) {
      const updatedUser = { ...user };
      updatedUser.cycleTheme = selectedValue;
      await setUserInfoCookie(updatedUser);
    }

    updateProfileData();
    pageNavigationHandler({ showProgressBar: false, id: loadingId, linkTo: '/protected/cycle' });
  };

  const { callApi, isLoading: submitLoading } = usePwaApi({
    api: `info/cycletheme?AppVersion=${APP_VERSION}`,
    onSuccess: successHandler,
    method: 'PUT',
  });

  const submitHandler = () => {
    callApi({ theme: selectedValue });
  };

  const isLoading = submitLoading || pageNavigationLoading === loadingId;

  return { submitHandler, isLoading };
};

export default useSubmit;
