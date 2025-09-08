import { useEffect, useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

const useRoutinTabData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const initialIndex = getQueryParams('initialIndex');

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (initialIndex) {
      setActiveTab(JSON.parse(initialIndex));
    }
  }, [initialIndex]);

  return { activeTab, handleTabChange };
};

export default useRoutinTabData;
