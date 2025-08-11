import { CycleThemeEnum } from '@services/loginServices/enum';
import { getUserCookie, setUserCookie } from '@utils/cookies';

import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

const useSubmit = (selectedValue: CycleThemeEnum) => {
  const { updateProfileData } = useGetProfileData();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = 'EditCycleContainer';

  const successHandler = () => {
    const { user } = getUserCookie();

    if (user && user?.cycleTheme) {
      const updatedUser = { ...user };
      updatedUser.cycleTheme = selectedValue;
      setUserCookie(updatedUser);
    }
    updateProfileData();
    pageNavigationHandler({ showProgressBar: false, id: loadingId, linkTo: '/protected/cycle' });
  };

  const { callApi, isLoading: submitLoading } = useApi({
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
