import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { OptionButton } from '@repo/core/components/ui/OptionButton';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

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
      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
        {data.title}
      </CustomTypography>

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

      <CustomButton
        onClick={submitHandler}
        style={{
          background: colorFormatConverter(data.submit.backgroundColor),
          color: colorFormatConverter(data.submit.foregroundColor),
        }}
        className="h-12"
        fontSize="Title_Small"
      >
        {data.submit.text}
      </CustomButton>
    </div>
  );
};

export default PopupMultiOption;
