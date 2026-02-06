import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

import { WidgetCardHealthReportContainerProps } from './types';

const WidgetCardHealthReportContainer = ({
  children,
  button,
  title,
  classNameBtn,
  isPdfDownloading,
}: WidgetCardHealthReportContainerProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <div className={`w-full h-fit rounded-2xl p-4 bg-impo_Neutral_Background ${isPdfDownloading && 'bg-impo_White'}`}>
      <CustomTypography
        fontSize="Lable_Large"
        className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'} pb-1 ml-auto`}
      >
        {title}
      </CustomTypography>

      <>{children}</>

      {button && (
        <CustomButton
          className={`mt-4 ${classNameBtn}`}
          onClick={() => actionHandler(button.action)}
          isDisable={button?.action.actionType === ActionTypeEnum.None}
          fontSize="Lable_Large"
        >
          {button.text}
        </CustomButton>
      )}
    </div>
  );
};

export default WidgetCardHealthReportContainer;
