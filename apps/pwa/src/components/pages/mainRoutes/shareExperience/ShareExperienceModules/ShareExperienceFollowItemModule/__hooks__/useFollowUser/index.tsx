import useApi from '@hooks/useApi';

import { UseFollowUserPropsHandler } from './type';

const useFollowUser = ({ userId, isFollow }: UseFollowUserPropsHandler) => {
  const api = `shareeexperience/v3/profile/${userId}/${isFollow ? 'unfollow' : 'follow'}`;
  const { callApi, isLoading } = useApi({ api, method: 'GET', queryKey: ['follow' + api], fetchOnMount: false });

  const followHandler = () => {
    callApi();
  };

  return { followHandler, isLoading };
};

export default useFollowUser;
