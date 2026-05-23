import { useContext } from 'react';

import { MonitoringContext } from '../../providers/MonitoringProvider/MonitoringProvider';

export const useMonitoring = () => {
  return useContext(MonitoringContext);
};
