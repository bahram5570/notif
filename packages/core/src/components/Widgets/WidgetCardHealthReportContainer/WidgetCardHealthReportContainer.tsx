import { useWidgetActions } from '../../../hooks/useWidgetActions';
import { ActionTypeEnum } from '../../../providers/WidgetActionsProvider';
import { CustomButton } from '../../ui/CustomButton';
import { CustomTypography } from '../../ui/CustomTypography';
import { WidgetCardHealthReportContainerProps } from './types';

export const WidgetCardHealthReportContainer = ({
  isPdfDownloading,
  classNameBtn,
  children,
  button,
  title,
}: WidgetCardHealthReportContainerProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <div className={`w-full h-fit rounded-2xl p-4 bg-impo_Neutral_Background ${isPdfDownloading && 'bg-impo_White'}`}>
      <CustomTypography
        fontSize="Lable_Large"
        className={`text-impo_Neutral_OnBackground pb-1 ml-auto ${isPdfDownloading && '!text-impo_Black'}`}
      >
        {title}
      </CustomTypography>

      <>{children}</>

      {button && (
        <CustomButton
          fontSize="Lable_Large"
          className={`mt-4 ${classNameBtn}`}
          onClick={() => actionHandler(button.action)}
          isDisable={button?.action.actionType === ActionTypeEnum.None}
        >
          {button.text}
        </CustomButton>
      )}
    </div>
  );
};
