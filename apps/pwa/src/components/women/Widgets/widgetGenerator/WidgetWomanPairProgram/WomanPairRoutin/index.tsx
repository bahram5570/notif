import { textShorter } from '@utils/scripts';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import WidgetRoutinWriter from '../../WidgetRoutin/WidgetRoutinWriter';
import { WomanPairRoutinPropsType } from './type';

const WomanPairRoutin = (props: WomanPairRoutinPropsType) => {
  const { actionHandler } = useWidgetActions();

  return (
    <>
      <div className="flex justify-end items-center border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {props.title}
        </Dark_Typography>
      </div>

      <div className="flex flex-col items-end rounded-xl p-3 ">
        <WidgetRoutinWriter
          writerName={props.writerName}
          writerIcon={props.writerIcon}
          writerSpeciality={props.writerSpeciality}
        />

        <div className="w-full h-[1px] my-2 bg-impo_Blue_100" />
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {textShorter(props.description, 80)}
        </Dark_Typography>
      </div>

      <Dark_Button
        className="mt-auto"
        onClick={() => actionHandler(props.button.action)}
        fontSize="Lable_Large"
        isDisable={props.button?.action.actionType === ActionTypeEnum.None}
      >
        {props.button.text}
      </Dark_Button>
    </>
  );
};

export default WomanPairRoutin;
