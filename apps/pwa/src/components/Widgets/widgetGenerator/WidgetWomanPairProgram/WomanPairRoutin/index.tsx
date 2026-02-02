import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@utils/scripts';

import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import WidgetRoutinWriter from '../../WidgetRoutin/WidgetRoutinWriter';
import { WomanPairRoutinPropsType } from './type';

const WomanPairRoutin = (props: WomanPairRoutinPropsType) => {
  const { actionHandler } = useWidgetActions();

  return (
    <>
      <div className="flex justify-end items-center border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {props.title}
        </CustomTypography>
      </div>

      <div className="flex flex-col items-end rounded-xl p-3 ">
        <WidgetRoutinWriter
          writerName={props.writerName}
          writerIcon={props.writerIcon}
          writerSpeciality={props.writerSpeciality}
        />

        <div className="w-full h-[1px] my-2 bg-impo_Grey_200" />
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {textShorter(props.description, 80)}
        </CustomTypography>
      </div>

      <CustomButton
        className="mt-auto"
        onClick={() => actionHandler(props.button.action)}
        fontSize="Lable_Large"
        isDisable={props.button?.action.actionType === ActionTypeEnum.None}
      >
        {props.button.text}
      </CustomButton>
    </>
  );
};

export default WomanPairRoutin;
