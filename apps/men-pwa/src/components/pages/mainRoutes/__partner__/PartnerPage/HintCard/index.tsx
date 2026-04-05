import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';
import { ActionTypeEnum, ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

import { HintCardPropsType } from './type';

const HintCard = ({ hintTitle, hints }: HintCardPropsType) => {
  const { actionHandler } = useWidgetActions();

  const linkToHandler = (link: string) => {
    const action: ActionTypes = {
      api: '',
      internal: '',
      actionTypes: [],
      actionType: ActionTypeEnum.None,
      nextStep: { type: 0, isDismissible: false, delaySecond: 0, data: null },
    };

    action.actionType = ActionTypeEnum.ExternalRout;
    action.api = link;

    actionHandler(action);
  };

  return (
    <div className="w-full h-fit rounded-2xl bg-impo_Neutral_Background">
      <div className="flex w-full justify-end items-center border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface">
        <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
          {hintTitle}
        </CustomTypography>
      </div>

      <div className="w-full flex flex-col items-end gap-3 px-4 bg-impo_Neutral_Surface rounded-xl">
        {hints.map((item, index) => {
          const isLastChild = index === hints.length - 1;
          const hasLink = item.link;
          return (
            <div
              className={`w-full flex flex-col p-2 items-end gap-1 border-impo_Grey_200 ${isLastChild ? '' : 'border-b-[1px] pb-3'}`}
              key={index}
            >
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                {item.text}
              </CustomTypography>
              {hasLink && (
                <div className="w-full flex items-center gap-2">
                  <div
                    onClick={() => linkToHandler(item.link)}
                    className="w-[110px] h-[32px] rounded-full border-[1px] flex items-center justify-center cursor-pointer border-impo_Surface_OutlineVariant"
                  >
                    <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
                      {item.buttonText}
                    </CustomTypography>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HintCard;
