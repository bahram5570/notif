import { useContext } from 'react';

import { ToastContext } from '../../providers/ToastProvider';

export const useCustomToast = () => {
  return useContext(ToastContext);
};
