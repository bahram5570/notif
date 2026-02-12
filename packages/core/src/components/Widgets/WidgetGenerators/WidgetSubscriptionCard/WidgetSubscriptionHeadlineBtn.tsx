import { colorFormatConverter } from '../../../../utils/scripts';

import { useWidgetActions } from '../../../../hooks/useWidgetActions';
import { ActionTypeEnum } from '../../../../providers/WidgetActionsProvider';
import { CustomButton } from '../../../ui/CustomButton';
import { WidgetSubscriptionHeadlineBtnProps } from './types';

const WidgetSubscriptionHeadlineBtn = ({
  backgroundColor,
  foregroundColor,
  action,
  text,
}: WidgetSubscriptionHeadlineBtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <CustomButton
      className="h-8"
      fontSize="Lable_Medium"
      onClick={() => actionHandler(action)}
      isDisable={action.actionType === ActionTypeEnum.None}
      style={{
        backgroundColor: colorFormatConverter(backgroundColor),
        borderColor: colorFormatConverter(backgroundColor),
        color: colorFormatConverter(foregroundColor),
      }}
    >
      {text}
    </CustomButton>
  );
};

export default WidgetSubscriptionHeadlineBtn;
