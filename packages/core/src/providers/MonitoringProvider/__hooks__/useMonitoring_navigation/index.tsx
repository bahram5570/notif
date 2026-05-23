import { useState } from 'react';

import { MonitoringNavigationTypes } from '../../types';
import useMonitoring_SEND_TO_SERVER from '../useMonitoring_SEND_TO_SERVER';

const useMonitoring_navigation = (isActive: boolean) => {
  const [list, setList] = useState<MonitoringNavigationTypes[]>([]);
  const [currentList, setCurrentList] = useState<MonitoringNavigationTypes[]>([]);

  const navigation = (v: MonitoringNavigationTypes) => {
    if (!isActive) {
      return;
    }

    setCurrentList([...currentList, v]);
  };

  const completeHandler = () => {
    setCurrentList((state) => {
      setList(state);
      return [];
    });
  };

  useMonitoring_SEND_TO_SERVER({ list, api: '/api/shared/monitoring/navigation', onComplete: completeHandler });

  return navigation;
};

export default useMonitoring_navigation;
