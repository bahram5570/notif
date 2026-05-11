'use client';

import { useState } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';

const RevalidatePage = () => {
  const { notifyToastHandler } = useCustomToast();

  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const loginHandler = () => {
    if (password.trim() === process.env.NEXT_PUBLIC_REVALIDATE_PAGE_TOKEN) {
      setConfirmed(true);
      setPassword('');
    } else {
      notifyToastHandler({ type: 'error', message: 'رمز ورود اشتباهه!' });
      setPassword('');
    }
  };

  const [tag, setTag] = useState('');

  const revalidateHandler = async () => {
    try {
      const body = JSON.stringify({ tag: tag.trim() });
      const req = await fetch('/api/revalidateTag', { method: 'POST', body });
      const res = await req.json();

      if (res.valid) {
        notifyToastHandler({ type: 'success', message: 'کش حذف شد' });
        setTag('');
      }
    } catch (error) {
      console.log(error);
      notifyToastHandler({ type: 'error', message: 'مشکلی پیش اومد!' });
      setTag('');
    }
  };

  return (
    <div className="w-full h-full max-w-[400px] px-4 py-10 flex flex-col gap-4">
      {!confirmed && (
        <>
          <CustomInput
            value={password}
            fontSize="Body_Large"
            numbersMode="english"
            onValue={setPassword}
            placeholder="password"
            style={{ direction: 'ltr' }}
            className="border border-impo_Surface_Outline rounded-full py-1 px-4"
          />

          <CustomButton onClick={loginHandler}>ورود</CustomButton>
        </>
      )}

      {confirmed && (
        <>
          <CustomInput
            value={tag}
            onValue={setTag}
            placeholder="tag"
            fontSize="Body_Large"
            numbersMode="english"
            style={{ direction: 'ltr' }}
            className="border border-impo_Surface_Outline rounded-full py-1 px-4"
          />

          <CustomButton onClick={revalidateHandler}>حذف کش</CustomButton>
        </>
      )}
    </div>
  );
};

export default RevalidatePage;
