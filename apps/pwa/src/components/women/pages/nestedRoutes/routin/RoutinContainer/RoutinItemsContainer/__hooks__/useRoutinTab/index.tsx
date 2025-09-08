import { useState } from 'react';

const useRoutinTab = () => {
  const [tab, setTab] = useState(1);

  const tabHandler = (t: number) => {
    setTab(t);
  };

  return { tab, tabHandler };
};

export default useRoutinTab;
