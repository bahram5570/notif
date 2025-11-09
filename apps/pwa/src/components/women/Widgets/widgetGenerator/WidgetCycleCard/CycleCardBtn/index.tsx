import { colorFormatConverter } from '@utils/scripts';

import Button from '@components/ui/Button';
import WidgetScaleModule from '@components/women/Widgets/WidgetScaleModule';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { CycleCardBtnProps } from './types';

const CycleCardBtn = ({ buttonsList }: CycleCardBtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <WidgetScaleModule>
      <div className="w-full flex justify-center gap-4">
        {buttonsList.map((item, index) => (
          <Button
            key={index}
            size="medium"
            variant="fill"
            fullWidth={false}
            color="FREE-STYLES"
            className="min-w-[140px]"
            onClick={() => actionHandler(item.action)}
            buttonColor={colorFormatConverter(item.backgroundColor)}
            contentsColor={colorFormatConverter(item.foregroundColor)}
            isDisable={item.action.actionType === ActionTypeEnum.None}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </WidgetScaleModule>
  );
};

export default CycleCardBtn;
