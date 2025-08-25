import { handleValidation } from './__utils__';

import useCustomToast from '@hooks/useCustomToast';

import { UserInfoType } from '../../type';

const useSubmit = () => {
  const { onToast } = useCustomToast();

  const submitHandler = (payload: UserInfoType) => {
    const invalidMessage = handleValidation(payload);

    if (invalidMessage) {
      return onToast({ type: 'error', message: invalidMessage });
    }
  };

  return { submitHandler };
};

export default useSubmit;
