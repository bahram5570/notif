import { useEffect } from 'react';

import { sssetUserCookie } from '@actions/cookie.actions';

import { UseCompleteRegisterCookieProps } from './types';

const useCompleteRegisterCookie = ({ fetchedUser, clearStorage }: UseCompleteRegisterCookieProps) => {
  useEffect(() => {
    const handleRegister = async () => {
      const updateduser = { ...fetchedUser };
      updateduser.createdTime = Date.now();
      await sssetUserCookie(updateduser);

      if (clearStorage) {
        sessionStorage.clear();
      }
    };

    handleRegister();
  }, []);
};

export default useCompleteRegisterCookie;
