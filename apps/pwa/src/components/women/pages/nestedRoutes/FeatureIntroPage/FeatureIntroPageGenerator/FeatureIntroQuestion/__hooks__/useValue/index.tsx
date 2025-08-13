import { useState } from 'react';

import { UseValuePropsType } from './type';

const useValue = ({ data }: UseValuePropsType) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const correctAnswer = selectedIndex !== null ? data.options[selectedIndex]?.isCorrect : false;
  const rewardData =
    selectedIndex !== null ? (data.options[selectedIndex]?.isCorrect ? data.successFull : data.fail) : null;

  return { selectedIndex, handleClick, correctAnswer, rewardData };
};

export default useValue;
