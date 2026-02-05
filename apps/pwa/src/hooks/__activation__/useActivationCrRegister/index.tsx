import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';
import { ACTIVATION_CR_REGISTER_QUERY_NAME } from '@constants/routes.constants';

const useActivationCrRegister = () => {
  const completeRegisterHandler = (v: FetchedUserTypes) => {
    const data = JSON.stringify(v);
    const registerInfo = `${ACTIVATION_CR_REGISTER_QUERY_NAME}=${data}`;

    window.parent.postMessage({ type: 'ACTIVATION_CR_REGISTER', registerInfo }, '*');
  };

  return { completeRegisterHandler };
};

export default useActivationCrRegister;
