import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { WomanStatusItems } from './constants';

export const useWomanStatus = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNextStep = () => {
    if (selectedIndex === null) return;

    const selectedItem = WomanStatusItems[selectedIndex];

    const storedData = localStorage.getItem('geneticUserData');
    let userData = storedData ? JSON.parse(storedData) : {};

    userData = {
      ...userData,
      womanStatus: selectedItem.title,
    };

    localStorage.setItem('geneticUserData', JSON.stringify(userData));
    router.push('/landing/geneticMarketing/testOnline');
  };

  return {
    selectedIndex,
    handleSelect,
    handleNextStep,
    isNextDisabled: selectedIndex === null,
  };
};
