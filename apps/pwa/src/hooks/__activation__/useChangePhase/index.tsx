import { useState } from 'react';

import { phaseChangePayloadUpdater } from './__utils__';

import { UserCookieTypes, gggetUserCookie } from '@actions/cookie.actions';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import { UsePhaseChangeProps } from './types';

const usePhaseChange = ({ payload, api }: UsePhaseChangeProps) => {
  const { culture } = useCulture();
  const { updateProfileDateByDellay } = useGetProfileData();
  const [fetchedUser, setFetchedUser] = useState<UserCookieTypes | null>(null);

  const phaseChangeSuccessHandler = async () => {
    const user = await gggetUserCookie();

    updateProfileDateByDellay();

    if (user) {
      user.installationPurpose = { periodStatus: payload.periodStatus, status: payload.status };
      setFetchedUser(user);
    }
  };

  const { isLoading, callApi } = useApi({
    api,
    method: 'PUT',
    onSuccess: phaseChangeSuccessHandler,
  });

  const phaseChangeHandler = () => {
    const updatedPayload = phaseChangePayloadUpdater(payload, culture.calendarType);
    callApi(updatedPayload);
  };

  return { phaseChangeHandler, isLoading, fetchedUser };
};

export default usePhaseChange;
