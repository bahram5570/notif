import { useContext } from 'react';

import { CustomToastContext } from '@providers/CustomToastProvider';

const useCustomToast = () => {
  return useContext(CustomToastContext);
};

export default useCustomToast;
