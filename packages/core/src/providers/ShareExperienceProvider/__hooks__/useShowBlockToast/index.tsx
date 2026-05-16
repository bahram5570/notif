import { useState } from 'react';

import { AccessOptionType } from './type';

const useShowBlockToast = () => {
  const [accessOption, setAccessOption] = useState<AccessOptionType>({
    isBan: false,
    textMessage: '',
    btnText: 'بازگشت به صفحه اصلی',
  });

  const accessOptionHandler = (v: AccessOptionType) => {
    setAccessOption(v);
  };

  return { accessOption, accessOptionHandler };
};

export default useShowBlockToast;
