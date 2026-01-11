import { useState } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';
import Typography from '@components/ui/Typography';

import RadioButtonGenerator from './RadioButtonGenerator';
import { QuestionGeneratorPropsType } from './type';

const QuestionGenerator = ({ options, text, handleSelectionChange }: QuestionGeneratorPropsType) => {
  const [optionList, setOptionList] = useState(options);

  const handleChange = (value: number) => {
    const selectedIndex = optionList.findIndex((option) => option.value === value);

    if (selectedIndex !== -1) {
      const updatedOptions = [...optionList];
      updatedOptions.forEach((option, index) => {
        option.isSelected = index === selectedIndex;
      });

      setOptionList(updatedOptions);
      handleSelectionChange(optionList[selectedIndex].key, optionList[selectedIndex].value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Dark_Typography className="w-full mt-2 text-impo_Neutral_OnBackground" fontSize="Body_Medium">
        {text}
      </Dark_Typography>
      <div className="flex flex-col gap-2 w-full">
        {optionList.map((option, index) => {
          return (
            <div key={index}>
              <RadioButtonGenerator
                isSelected={option.isSelected}
                label={option.label}
                value={option.value}
                handleChange={handleChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionGenerator;
