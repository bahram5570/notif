import { useState } from 'react';

const useRoutinTabData = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  return { activeTab, handleTabChange };
};

export default useRoutinTabData;
