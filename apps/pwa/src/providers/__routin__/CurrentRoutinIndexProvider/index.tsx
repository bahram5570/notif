import { createContext, useState } from 'react';

import { CurrentRoutinIndexContextPropsType } from './type';

export const CurrentRoutinIndexContext = createContext<CurrentRoutinIndexContextPropsType>({
  index: undefined,
  updateInexHandler: (index) => {},
});

const CurrentRoutinIndexProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(undefined);

  const updateInexHandler = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CurrentRoutinIndexContext.Provider value={{ index: currentIndex, updateInexHandler }}>
      {children}
    </CurrentRoutinIndexContext.Provider>
  );
};

export default CurrentRoutinIndexProvider;
