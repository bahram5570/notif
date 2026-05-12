import { useState } from 'react';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';

const useRevalidate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { notifyToastHandler } = useCustomToast();
  const [tag, setTag] = useState('');

  const tagHandler = (v: string) => {
    setTag(v);
  };

  const revalidateHandler = async () => {
    setIsLoading(true);

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

    setIsLoading(false);
  };

  return { tag, tagHandler, revalidateHandler, isLoading };
};

export default useRevalidate;
