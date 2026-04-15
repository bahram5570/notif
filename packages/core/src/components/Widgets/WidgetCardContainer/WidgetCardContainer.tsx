import { useWidgetActions } from '../../../hooks/useWidgetActions';
import { ActionTypeEnum } from '../../../providers/WidgetActionsProvider';
import { CustomButton } from '../../ui/CustomButton';
import { CustomTypography } from '../../ui/CustomTypography';
import { WidgetCardContainerProps } from './types';

export const WidgetCardContainer = ({
  titleElement,
  classNameBtn,
  description,
  className,
  children,
  buttonId,
  onClick,
  button,
  title,
}: WidgetCardContainerProps) => {
  const { actionHandler } = useWidgetActions();

  const clickHandler = () => {
    if (button) {
      if (onClick) {
        onClick();
      }

      actionHandler(button.action);
    }
  };

  return (
    <div className={`w-full px-4 pt-6 ${className}`}>
      <div className="w-full h-fit rounded-2xl p-4 bg-impo_Neutral_Background">
        <div className="flex justify-between items-start gap-2 border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface">
          <div className="min-w-fit">{titleElement}</div>

          <div className="flex flex-col items-end gap-1">
            <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
              {title}
            </CustomTypography>

            {description && (
              <CustomTypography fontSize="Lable_Small" className="!text-impo_Surface_Outline">
                {description}
              </CustomTypography>
            )}
          </div>
        </div>

        <>{children}</>

        {button && (
          <CustomButton
            id={buttonId}
            onClick={clickHandler}
            fontSize="Lable_Large"
            className={`mt-4 ${classNameBtn}`}
            isDisable={button?.action.actionType === ActionTypeEnum.None}
          >
            {button.text}
          </CustomButton>
        )}
      </div>
    </div>
  );
};
