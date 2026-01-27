import { useState } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import OptionButton from '@components/ui/OptionButton';
import useWidgetActions from '@hooks/useWidgetActions';

import { PopupMultiOptionProps, SelectHandlerTypes } from './types';

const PopupMultiOption = ({ data }: PopupMultiOptionProps) => {
  const { actionHandler } = useWidgetActions();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const selectHandler: SelectHandlerTypes = (i) => {
    setSelectedOptionIndex(i);
  };

  const submitHandler = () => {
    const action = data.items?.[selectedOptionIndex]?.action;

    if (action) {
      actionHandler(action);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
        {data.title}
      </Dark_Typography>

      <div className="w-full flex flex-col gap-3 py-6">
        {data.items.map((option, index) => (
          <OptionButton
            key={index}
            text={option.title}
            onClick={() => selectHandler(index)}
            isSelected={selectedOptionIndex === index}
          />
        ))}
      </div>

      <Dark_Button
        onClick={submitHandler}
        style={{
          background: colorFormatConverter(data.submit.backgroundColor),
          color: colorFormatConverter(data.submit.foregroundColor),
        }}
        className="h-12"
        fontSize="Title_Small"
      >
        {data.submit.text}
      </Dark_Button>
    </div>
  );
};

export default PopupMultiOption;
