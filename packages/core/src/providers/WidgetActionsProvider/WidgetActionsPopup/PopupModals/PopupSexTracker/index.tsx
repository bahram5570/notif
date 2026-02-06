import { useState } from 'react';

import { CustomButton } from '../../../../../components/ui/CustomButton';
import { CustomTypography } from '../../../../../components/ui/CustomTypography';
import { OptionButton } from '../../../../../components/ui/OptionButton';
import { colorFormatConverter } from '../../../../../utils/scripts';

import { useAnalytics } from '../../../../../hooks/useAnalytics';
import { useWidgetActions } from '../../../../../hooks/useWidgetActions';
import PopupTwoStepsContainer from '../PopupTwoStepsContainer';
import { PopupSexTrackerProps } from './types';

const PopupSexTracker = ({ data }: PopupSexTrackerProps) => {
  const { actionHandler } = useWidgetActions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { callEvent } = useAnalytics({ pageView_eventName: 'SexTracker_Interaction_Showed' });

  const selectHandler = (i: number) => {
    setSelectedIndex(i);
  };

  const submitHandler = () => {
    callEvent('SexTracker_Interaction_Submit');
    actionHandler(data.items[selectedIndex].action);
  };

  return (
    <PopupTwoStepsContainer currentStep={1}>
      <div className="w-full px-4">
        <div className="flex flex-col items-center gap-1 pb-10">
          <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
            {data.title}
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
            {data.description}
          </CustomTypography>
        </div>

        <div className="w-full px-4 pt-4 pb-6 rounded-xl bg-impo_Neutral_Background">
          <div className="flex flex-col gap-3 w-full pb-[130px]">
            {data.items.map((option, index) => (
              <OptionButton
                key={index}
                text={option.title}
                onClick={() => selectHandler(index)}
                isSelected={selectedIndex === index}
              />
            ))}
          </div>

          <CustomButton
            onClick={submitHandler}
            style={{
              background: colorFormatConverter(data.submit.backgroundColor),
              color: colorFormatConverter(data.submit.foregroundColor),
              borderColor: colorFormatConverter(data.submit.backgroundColor),
            }}
            fontSize="Title_Small"
            className="h-12"
          >
            {data.submit.text}
          </CustomButton>
        </div>
      </div>
    </PopupTwoStepsContainer>
  );
};

export default PopupSexTracker;
