import { useCustomToast } from '@repo/core/hooks/useCustomToast';

const useCopy = () => {
  const toast = useCustomToast();

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);

        toast.notifyToastHandler({ message: 'کپی شد', type: 'success' });
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
          toast.notifyToastHandler({ message: 'کپی شد', type: 'success' });
        } else {
          throw new Error('Fallback copy failed');
        }
        document.body.removeChild(textArea);
      } catch (err) {
        console.error('Fallback error: ', err);
        toast.notifyToastHandler({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    }

    return { copyToClipboard };
  };

  return { copyToClipboard };
};

export default useCopy;
