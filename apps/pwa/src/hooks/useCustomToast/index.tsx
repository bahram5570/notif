import { useContext } from 'react';

import { ToastContext } from '@providers/ToastProvider';

const useCustomToast = () => {
  return useContext(ToastContext);
};

export default useCustomToast;
