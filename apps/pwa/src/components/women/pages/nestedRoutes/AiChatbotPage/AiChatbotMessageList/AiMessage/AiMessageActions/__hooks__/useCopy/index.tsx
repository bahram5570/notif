import { decodeUnicode, parseFormattedText } from '../../../utils';

import useCustomToast from '@hooks/useCustomToast';

const useCopy = () => {
  const toast = useCustomToast();

  const copyToClipboard = async (text: string) => {
    const formattedLine = parseFormattedText(text);
    const decoded = decodeUnicode(formattedLine);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(decoded);

        toast.feedbackToastHandler({
          message: 'متن کپی شد ',
          duration: 2000,
          isCopyToast: true,
        });
      } catch (err) {
        console.error(err);
        toast.notifyToastHandler({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    } else {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = decoded;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        if (successful) {
          toast.feedbackToastHandler({
            message: 'متن کپی شد ',
            duration: 2000,
            isCopyToast: true,
          });
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
