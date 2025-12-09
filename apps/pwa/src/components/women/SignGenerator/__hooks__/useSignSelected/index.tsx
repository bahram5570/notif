import { useState } from 'react';

import { useSignSelectedProps } from './types';

const useSignSelected = ({ initialIsSelected, category, sign, onSelect, selectedDate }: useSignSelectedProps) => {
  const [isSelected, setIsSelected] = useState(initialIsSelected);

  const isSelectedHandler = () => {
    if (onSelect) {
      onSelect(category, sign);
    }

    setIsSelected(!isSelected);
  };

  return { isSelected, isSelectedHandler };
};

export default useSignSelected;
