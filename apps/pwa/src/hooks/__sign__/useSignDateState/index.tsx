import { useContext } from 'react';

import { SignDateStateContext } from '@providers/__sign__/SignDateStateProvider';

const useSignDateState = () => {
  return useContext(SignDateStateContext);
};

export default useSignDateState;
