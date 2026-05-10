import { useState } from 'react';

import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { EditProfileImageHandlerType } from './type';

const useEditProfileImage = () => {
  const [image, setImage] = useState('');
  const router = useRouter();
  const { getQuery, updateQuery } = useCustomReactQuery(['profile']);
  const queryData = getQuery<{ data: ProfileResponseTypes }>({ queryKey: ['profile'] });

  const successHandler = () => {
    if (queryData?.data) {
      const newData = {
        data: { ...queryData.data, avatarImage: image, canDeleteAvatar: true },
      };

      updateQuery({ payload: newData, queryKey: ['profile'] });
    }
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `profile/image`,
  });

  const editProfileImageHandler: EditProfileImageHandlerType = (v) => {
    if (v.fileName) {
      callApi({ fileName: v.fileName });
      setImage(v.fileName);
    }
  };

  return { editProfileImageHandler, isLoading };
};

export default useEditProfileImage;
