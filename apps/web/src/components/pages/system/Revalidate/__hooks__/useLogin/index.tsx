import { useState } from 'react';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';

const useLogin = () => {
  const { notifyToastHandler } = useCustomToast();

  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const loginHandler = () => {
    if (password.trim() === process.env.NEXT_PUBLIC_REVALIDATE_PAGE_TOKEN) {
      notifyToastHandler({ type: 'success', message: 'رمز ورود درسته!' });
      setConfirmed(true);
      setPassword('');
    } else {
      notifyToastHandler({ type: 'error', message: 'رمز ورود اشتباهه!' });
      setPassword('');
    }
  };

  const passwordHandler = (v: string) => {
    setPassword(v);
  };

  return { password, passwordHandler, loginHandler, confirmed };
};

export default useLogin;
