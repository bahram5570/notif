import { useEffect } from 'react';

import { setUserCookie } from '@actions/cookie.actions';

import { UseCompleteRegisterCookieProps } from './types';

const useCompleteRegisterCookie = ({ fetchedUser, clearStorage }: UseCompleteRegisterCookieProps) => {
  useEffect(() => {
    const handleRegister = async () => {
      const updateduser = { ...fetchedUser };
      updateduser.createdTime = Date.now();
      await setUserCookie(updateduser);

      if (clearStorage) {
        sessionStorage.clear();
      }
    };

    handleRegister();
  }, []);
};

export default useCompleteRegisterCookie;
