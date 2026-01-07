import { colorFormatConverter } from '@utils/scripts';

import Dark_Button from '@components/ui/Dark_Button';
import WidgetScaleModule from '@components/women/Widgets/WidgetScaleModule';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { CycleCardBtnProps } from './types';

const CycleCardBtn = ({ buttonsList }: CycleCardBtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <WidgetScaleModule>
      <div className="w-full flex justify-center gap-4 pt-4">
        {buttonsList.map((item, index) => (
          <Dark_Button
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
          </Dark_Button>
        ))}
      </div>
    </WidgetScaleModule>
  );
};

export default CycleCardBtn;

// <Button
//   key={index}
//   size="medium"
//   variant="fill"
//   fullWidth={false}
//   color="FREE-STYLES"
//   className="min-w-[140px]"
//   onClick={() => actionHandler(item.action)}
//   buttonColor={colorFormatConverter(item.backgroundColor)}
//   contentsColor={colorFormatConverter(item.foregroundColor)}
//   isDisable={item.action.actionType === ActionTypeEnum.None}
// >
//   {item.text}
// </Button>
