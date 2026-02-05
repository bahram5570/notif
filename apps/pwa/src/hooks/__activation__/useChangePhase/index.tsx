import { useState } from 'react';

import { phaseChangePayloadUpdater } from './__utils__';

import { getUserCookie, getUserInfoCookie } from '@actions/userCookies.actions';
import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import { UsePhaseChangeProps } from './types';

const usePhaseChange = ({ payload, api }: UsePhaseChangeProps) => {
  const { culture } = useCulture();
  const { updateProfileDateByDellay } = useGetProfileData();
  const [fetchedUser, setFetchedUser] = useState<FetchedUserTypes | null>(null);

  const phaseChangeSuccessHandler = async () => {
    const user = await getUserCookie();
    const userInfo = await getUserInfoCookie();

    updateProfileDateByDellay();

    if (user && userInfo) {
      userInfo.installationPurpose = { periodStatus: payload.periodStatus, status: payload.status };
      setFetchedUser({ userCookie: user, userInfoCookie: userInfo });
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
