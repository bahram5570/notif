import { colorFormatConverter } from '@utils/scripts';

import Dark_Button from '@components/ui/Dark_Button';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { WidgetSubscriptionHeadlineBtnProps } from './types';

const WidgetSubscriptionHeadlineBtn = ({
  backgroundColor,
  foregroundColor,
  action,
  text,
}: WidgetSubscriptionHeadlineBtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <Dark_Button
      onClick={() => actionHandler(action)}
      isDisable={action.actionType === ActionTypeEnum.None}
      style={{
        backgroundColor: colorFormatConverter(backgroundColor),
        borderColor: colorFormatConverter(backgroundColor),
        color: colorFormatConverter(foregroundColor),
      }}
      className="h-8"
      fontSize="Lable_Medium"
    >
      {text}
    </Dark_Button>
  );
};

export default WidgetSubscriptionHeadlineBtn;
