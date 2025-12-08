import useCustomToast from '@hooks/useCustomToast';

const useCopy = ({ toastMessage }: { toastMessage: string }) => {
  const { onToast } = useCustomToast();
  const copylink = async (data: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(data);

        onToast({ type: 'success', message: toastMessage });
      } catch (err) {
        console.error(err);
        onToast({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    } else {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = data;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        if (successful) {
          onToast({ type: 'success', message: toastMessage });
        } else {
          throw new Error('Fallback copy failed');
        }
        document.body.removeChild(textArea);
      } catch (err) {
        console.error('Fallback error: ', err);
        onToast({ message: 'خطا در کپی کردن متن', type: 'error' });
      }
    }
  };

  return { copylink };
};

export default useCopy;
