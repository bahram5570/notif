import { useState } from 'react';

import useAnalytics from '@hooks/useAnalytics';
import useCustomToast from '@hooks/useCustomToast';

const useCopy = () => {
  const { callEvent } = useAnalytics();

  const [isCopied, setIsCopied] = useState(false);
  const toast = useCustomToast();

  const copyToClipboard = async (text: string) => {
    callEvent('InviteFromCopyCode');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        toast.notifyToastHandler({ message: 'کپی شد', type: 'success' });
        setTimeout(() => setIsCopied(false), 1000);
      } catch (err) {
        console.error(err);
        toast.notifyToastHandler({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    } else {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        if (successful) {
          setIsCopied(true);
          toast.notifyToastHandler({ message: 'کپی شد', type: 'success' });
          setTimeout(() => setIsCopied(false), 1000);
        } else {
          throw new Error('Fallback copy failed');
        }
        document.body.removeChild(textArea);
      } catch (err) {
        console.error('Fallback error: ', err);
        toast.notifyToastHandler({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    }
  };

  return { copyToClipboard, isCopied };
};

export default useCopy;
