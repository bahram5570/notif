import { useEffect, useState } from 'react';

import { getUserCookie } from '@actions/userCookies.actions';

const useProfileIdentity = () => {
  const [identity, setIdentity] = useState('');

  useEffect(() => {
    const getData = async () => {
      const user = await getUserCookie();

      if (user) {
        setIdentity(user.identity);
      }
    };

    getData();
  }, []);

  return { identity };
};

export default useProfileIdentity;
