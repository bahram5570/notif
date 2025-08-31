import { useState } from 'react';

import { ProgramWidgetPageEnum } from '../useConfig/enum';

const useRoutinTabData = () => {
  const [activeTab, setActiveTab] = useState(ProgramWidgetPageEnum.Recommended);

  const handleTabChange = (tabId: ProgramWidgetPageEnum) => {
    setActiveTab(tabId);
  };

  return { activeTab, handleTabChange };
};

export default useRoutinTabData;
