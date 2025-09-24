import { useState } from 'react';

import { WomanStatusItems } from './constants';
import useSubmit from './useSubmit';

export const useWomanStatus = () => {
  const { handleSubmit, isLoading } = useSubmit();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNextStep = () => {
    if (selectedIndex === null) return;

    const selectedItem = WomanStatusItems[selectedIndex];

    const storedData = localStorage.getItem('geneticUserData');
    let geneticUserData = storedData ? JSON.parse(storedData) : {};

    geneticUserData = {
      ...geneticUserData,
      womanStatus: selectedItem.enTitle,
    };

    handleSubmit(geneticUserData);
  };

  return {
    selectedIndex,
    handleSelect,
    handleNextStep,
    isNextDisabled: selectedIndex === null,
    isLoading,
  };
};
