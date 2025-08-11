import { useContext } from 'react';

import { SignDateStateContext } from '@providers/SignDateStateProvider';

const useSignDateState = () => {
  return useContext(SignDateStateContext);
};

export default useSignDateState;
