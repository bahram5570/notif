import { useState } from 'react';

import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';
import { useRouter } from 'next/navigation';

import { SuccessResponseType, onProfileChangeHandlerPropsType } from './type';

const useUpdateProfile = () => {
  const toast = useCustomToast();
  const route = useRouter();
  const { refetchQuery, updateQuery, getQuery } = useCustomReactQuery();
  const { accessOptionHandler } = useShareExperienceHandlers();
  const shareExperienceData = getQuery<ShareExperienceResponseTypes>({ queryKey: ['shareExperience'] });
  const [userUpdated, setUserUpdated] = useState({
    username: shareExperienceData?.profile.username || '',
    avatarImage: shareExperienceData?.profile.avatarImage || '',
  });

  const updateShareExperienceData = (v: SuccessResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    if (shareExperienceData) {
      updateQuery({
        queryKey: ['shareExperience'],
        payload: {
          ...shareExperienceData,
          profile: {
            ...shareExperienceData.profile,
            username: userUpdated.username,
            avatarImage: userUpdated.avatarImage,
          },
        },
      });
    }
  };

  const successHandler = (v: SuccessResponseType) => {
    refetchQuery({ queryKey: ['shareExperienceProfile'] });
    updateShareExperienceData(v);
    route.back();
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'manshareeexperience/v3/profile',
    method: 'POST',
    onSuccess: successHandler,
  });

  const onProfileChangeHandler = ({ avatarImage, username }: onProfileChangeHandlerPropsType) => {
    if (!username) {
      toast.notifyToastHandler({ message: 'نام کاربری را وارد کنید', type: 'error' });

      return;
    }

    setUserUpdated({
      username,
      avatarImage: avatarImage || '',
    });

    const payload = {
      username,
      avatarImage,
    };

    callApi(payload);
  };

  return { onProfileChangeHandler, isLoading };
};

export default useUpdateProfile;
