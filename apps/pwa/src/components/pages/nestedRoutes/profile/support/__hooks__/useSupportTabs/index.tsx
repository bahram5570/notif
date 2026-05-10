import { useState } from 'react';

import { SupportTabsEnum } from './Enum';

const useSupportTabs = () => {
  const [tab, setTab] = useState(SupportTabsEnum.Main);

  const supportTabHandler = (v: SupportTabsEnum) => {
    setTab(v);
  };

  return { tab, supportTabHandler };
};

export default useSupportTabs;
