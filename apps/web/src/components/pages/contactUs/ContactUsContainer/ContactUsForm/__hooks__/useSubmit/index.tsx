import { handleValidation } from './__utils__';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';

import { UserInfoType } from '../../type';

const useSubmit = () => {
  const { notifyToastHandler } = useCustomToast();

  const submitHandler = (payload: UserInfoType) => {
    const invalidMessage = handleValidation(payload);

    if (invalidMessage) {
      return notifyToastHandler({ type: 'error', message: invalidMessage });
    }
  };

  return { submitHandler };
};

export default useSubmit;
