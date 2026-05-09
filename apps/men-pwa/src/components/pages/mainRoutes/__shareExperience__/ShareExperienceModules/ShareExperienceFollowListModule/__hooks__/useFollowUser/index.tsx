import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { FollowQueryDataType } from '../../../ShareExperienceFollowListModule/__hooks__/useGetFollowData/type';
import { UseFollowUserPropsHandler } from './type';

const useFollowUser = ({ userId, isFollow, pageType, itemId, userName }: UseFollowUserPropsHandler) => {
  const { updateQuery, getQuery, refetchQuery } = useCustomReactQuery([`${pageType}Data${userId}`]);
  const toast = useCustomToast();

  const followQueryData = getQuery<FollowQueryDataType>({ queryKey: [`${pageType}Data${userId}`] });

  const api = `manshareeexperience/v3/profile/${itemId}/${isFollow ? 'unfollow' : 'follow'}`;

  const successHandler = () => {
    refetchQuery({ queryKey: ['shareExperienceProfile'] });

    if (followQueryData) {
      const newFollowQueryData = { ...followQueryData };
      const followQueryItemData = newFollowQueryData.items.find((item) => item.id === itemId);

      if (followQueryItemData) {
        followQueryItemData.isFollowed = !followQueryItemData.isFollowed;
        updateQuery({ queryKey: [`${pageType}Data${userId}`], payload: newFollowQueryData });
      }
    }

    toast.feedbackToastHandler({
      message: `${isFollow ? `${userName} از لیست کسانی که دنبالشون می کردی حذف شد` : `${userName} با موفقیت دنبال شد`}`,
      toastWithDescription: false,
    });
  };

  const { callApi, isLoading } = usePwaApi({
    api,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['follow' + api],
    onSuccess: successHandler,
  });

  const followHandler = () => {
    callApi();
  };

  return { followHandler, isLoading };
};

export default useFollowUser;
