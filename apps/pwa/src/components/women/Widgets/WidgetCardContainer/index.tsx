import Button from '@components/ui/Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { WidgetCardContainerProps } from './types';

const WidgetCardContainer = ({
  title,
  titleElement,
  button,
  children,
  buttonId,
  onClick,
  className,
  classNameBtn,
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

  // const backgroundColor = colors.Neutral_Background.toLowerCase() + 'b3';

  return (
    <div className={`w-full ${className} px-4 pt-6`}>
      <div className="w-full h-fit rounded-2xl p-4 bg-impo_Neutral_Background dark:border border-impo_Surface_SurfaceVariant ">
        <div className="flex justify-between items-center border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface dark:border-impo_Surface_SurfaceVariant">
          <div className="min-w-fit">{titleElement}</div>

          <Dark_Typography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
            {title}
          </Dark_Typography>
        </div>

        <>{children}</>

        {button && (
          <Button
            size="medium"
            variant="fill"
            className={`mt-4 ${classNameBtn}`}
            color="FREE-STYLES"
            onClick={clickHandler}
            buttonColor=""
            contentsColor=""
            isDisable={button?.action.actionType === ActionTypeEnum.None}
            id={buttonId}
          >
            {button.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default WidgetCardContainer;
