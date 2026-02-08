import { useState } from 'react';

import { registerPayloadUpdater } from '@utils/register';

import { getUserCookie, getUserInfoCookie } from '@actions/userCookies.actions';
import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';
import { ActivationPayloadTypes } from '@providers/__activation__/types';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UpdateOldUserSuccessHandlerTypes } from './types';

const useUpdateOldUser = (payload: ActivationPayloadTypes) => {
  const { culture } = useCulture();
  const { updatedPayload } = registerPayloadUpdater(payload, culture.calendarType);

  const [pair, setPair] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<FetchedUserTypes | null>(null);

  const updateOldUserSuccessHandler: UpdateOldUserSuccessHandlerTypes = async (v) => {
    const user = await getUserCookie();
    const userInfo = await getUserInfoCookie();

    if (user && userInfo) {
      setFetchedUser({ userCookie: user, userInfoCookie: userInfo });
      setPair(v.pair);
    }
  };

  const { isLoading, callApi } = usePwaApi({
    method: 'PUT',
    api: 'info/v2/update',
    onSuccess: updateOldUserSuccessHandler,
  });

  const updateHandler = () => {
    callApi(updatedPayload);
  };

  return { updateHandler, isLoading, pair, fetchedUser };
};

export default useUpdateOldUser;
