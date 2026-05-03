import useActionComplete from '../useActionComplete';

const useActionTypeCallPhone = (onActionComplete: () => void) => {
  const { onComplete } = useActionComplete(onActionComplete);

  const callPhone = (api: string) => {
    const el = document.createElement('a');
    document.body.appendChild(el);
    (el.style as unknown) = 'display: none';
    el.href = `tel:${api}`;
    // el.target = openNewTab ? '_blank' : '';
    el.click();
    document.body.removeChild(el);

    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return { callPhone };
};

export default useActionTypeCallPhone;
