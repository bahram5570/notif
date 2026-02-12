import { useContext } from 'react';

import { SignDateStateContext } from '../../providers/SignDateStateProvider';

export const useSignDateState = () => {
  return useContext(SignDateStateContext);
};
