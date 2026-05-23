import { useState } from 'react';

import { MonitoringApiTypes } from '../../types';
import useMonitoring_SEND_TO_SERVER from '../useMonitoring_SEND_TO_SERVER';

const useMonitoring_api = (isActive: boolean) => {
  const [list, setList] = useState<MonitoringApiTypes[]>([]);
  const [currentList, setCurrentList] = useState<MonitoringApiTypes[]>([]);

  const api = (v: MonitoringApiTypes) => {
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

  useMonitoring_SEND_TO_SERVER({ list, api: '/api/shared/monitoring/call-api', onComplete: completeHandler });

  return api;
};

export default useMonitoring_api;
