import { useState } from 'react';

import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';
import { useRouter } from 'next/navigation';

import { SuccessResponseType, onProfileChangeHandlerPropsType } from './type';

const useUpdateProfile = () => {
  const route = useRouter();
  const toast = useCustomToast();
  const { refetchQuery, updateQuery, getQuery } = useCustomReactQuery();
  const { accessOptionHandler } = useShareExperienceHandlers();
  const [payloadShareExperienceData, setPayloadShareExperienceData] = useState<ShareExperienceResponseTypes>();
  const shareExperienceData = getQuery<ShareExperienceResponseTypes>({ queryKey: ['shareExperience'] });

  const successHandler = (v: SuccessResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    refetchQuery({ queryKey: ['shareExperienceProfile'] });

    if (payloadShareExperienceData) {
      updateQuery({ queryKey: ['shareExperience'], payload: payloadShareExperienceData });
    }
    route.back();
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'shareeexperience/v3/profile',
    method: 'POST',
    onSuccess: successHandler,
  });

  const onProfileChangeHandler = ({ avatarImage, username }: onProfileChangeHandlerPropsType) => {
    if (!username) {
      toast.notifyToastHandler({ message: 'نام کاربری را وارد کنید', type: 'error' });

      return;
    }

    if (shareExperienceData) {
      setPayloadShareExperienceData({
        ...shareExperienceData,
        profile: { ...shareExperienceData.profile, username, avatarImage: avatarImage || '' },
      });
    }

    const payload = {
      username,
      avatarImage,
    };

    callApi(payload);
  };

  return { onProfileChangeHandler, isLoading };
};

export default useUpdateProfile;
