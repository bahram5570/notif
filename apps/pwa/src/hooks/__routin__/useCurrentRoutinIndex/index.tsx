import { useContext } from 'react';

import { CurrentRoutinIndexContext } from '@providers/__routin__/CurrentRoutinIndexProvider';

const useCurrentRoutinIndex = () => {
  return useContext(CurrentRoutinIndexContext);
};

export default useCurrentRoutinIndex;
