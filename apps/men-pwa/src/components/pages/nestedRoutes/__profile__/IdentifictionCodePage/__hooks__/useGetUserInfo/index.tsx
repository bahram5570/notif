import { useEffect, useState } from 'react';

import { getUserCookie } from '@actions/userCookies.actions';

import { UserInfoLoginTypes } from '../../types';

const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoLoginTypes>();

  useEffect(() => {
    const getData = async () => {
      const user = await getUserCookie();

      if (user) {
        setUserInfo(user);
      }
    };

    getData();
  }, []);

  return { userInfo };
};

export default useGetUserInfo;
