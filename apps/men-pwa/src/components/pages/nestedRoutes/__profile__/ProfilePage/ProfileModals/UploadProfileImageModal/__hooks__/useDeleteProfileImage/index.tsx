import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

const useDeleteProfileImage = () => {
  const router = useRouter();
  const { getQuery, updateQuery } = useCustomReactQuery(['profile']);
  const queryData = getQuery<{ data: ProfileResponseTypes }>({ queryKey: ['profile'] });

  const successHandler = (v: boolean) => {
    if (v) {
      if (queryData?.data) {
        const newData = {
          data: { ...queryData.data, avatarImage: '', canDeleteAvatar: false },
        };

        updateQuery({ payload: newData, queryKey: ['profile'] });
      }
      router.back();
    }
  };

  const { callApi } = usePwaApi({
    method: 'POST',
    onSuccess: (v: boolean) => successHandler(v),
    api: 'profile/image',
  });

  const deleteProfileImageHandler = () => {
    const payload = { filename: '' };
    callApi(payload);
  };

  return { deleteProfileImageHandler };
};

export default useDeleteProfileImage;
