import { useContext } from 'react';

import { RoutinTabsContext } from '@providers/__routinTabs__/RoutinTabsProvider';

const useRoutinTabData = () => {
  return useContext(RoutinTabsContext);
};

export default useRoutinTabData;
