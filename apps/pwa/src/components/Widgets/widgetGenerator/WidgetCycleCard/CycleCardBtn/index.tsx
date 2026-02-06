import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import WidgetScaleModule from '@components/Widgets/WidgetScaleModule';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

import { CycleCardBtnProps } from './types';

const CycleCardBtn = ({ buttonsList }: CycleCardBtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <WidgetScaleModule>
      <div className="w-full flex justify-center gap-4 pt-4">
        {buttonsList.map((item, index) => (
          <CustomButton
            key={index}
            fontSize="Lable_Large"
            className="z-10 min-w-[140px] !w-fit"
            onClick={() => actionHandler(item.action)}
            isDisable={item.action.actionType === ActionTypeEnum.None}
            style={{
              color: colorFormatConverter(item.foregroundColor),
              border: colorFormatConverter(item.backgroundColor),
              backgroundColor: colorFormatConverter(item.backgroundColor),
            }}
          >
            {item.text}
          </CustomButton>
        ))}
      </div>
    </WidgetScaleModule>
  );
};

export default CycleCardBtn;
