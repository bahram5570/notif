import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

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
      <Dark_Typography
        fontSize="Lable_Large"
        className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'} pb-1 ml-auto`}
      >
        {title}
      </Dark_Typography>

      <>{children}</>

      {button && (
        <Dark_Button
          className={`mt-4 ${classNameBtn}`}
          onClick={() => actionHandler(button.action)}
          isDisable={button?.action.actionType === ActionTypeEnum.None}
          fontSize="Lable_Large"
        >
          {button.text}
        </Dark_Button>
      )}
    </div>
  );
};

export default WidgetCardHealthReportContainer;
