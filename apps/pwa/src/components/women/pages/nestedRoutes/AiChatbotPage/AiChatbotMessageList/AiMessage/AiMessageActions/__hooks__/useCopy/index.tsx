import useCustomToast from '@hooks/useCustomToast';
import { useToast } from '@providers/ToastProvider/CustomToastProvider';

const useCopy = () => {
  const { onToast } = useCustomToast();
  const { showToast } = useToast();

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);

        showToast({
          message: 'متن کپی شد ',
          duration: 2000,
          isCopyToast: true,
        });
      } catch (err) {
        console.error(err);
        onToast({ message: 'خطا در کپی کردن متن', type: 'error' });
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
          showToast({
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
        onToast({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    }

    return { copyToClipboard };
  };

  return { copyToClipboard };
};

export default useCopy;
