import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@utils/scripts';

import Dark_Button from '@components/ui/Dark_Button';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import WidgetRoutinWriter from './WidgetRoutinWriter';
import { WidgetRoutinProps } from './types';

const WidgetRoutin = ({ data }: WidgetRoutinProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <>
      <div className="flex justify-end items-center border-b-[1px] pb-3 mb-3 border-impo_Neutral_Surface">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {data.title}
        </CustomTypography>
      </div>

      <div className="flex flex-col items-end rounded-xl p-3 ">
        <WidgetRoutinWriter
          writerName={data.writerName}
          writerIcon={data.writerIcon}
          writerSpeciality={data.writerSpeciality}
        />

        <div className="w-full h-[1px] my-2 bg-impo_Blue_100" />
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {textShorter(data.description, 80)}
        </CustomTypography>
      </div>

      <Dark_Button
        className="mt-4"
        onClick={() => actionHandler(data.button.action)}
        fontSize="Lable_Large"
        isDisable={data.button?.action.actionType === ActionTypeEnum.None}
      >
        {data.button.text}
      </Dark_Button>
    </>
  );
};

export default WidgetRoutin;
