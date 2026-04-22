import { useMemo } from 'react';

import { textShorter } from '../../../../../utils/scripts';

import { useSystem } from '../../../../../hooks/useSystem';
import { useWidgetActions } from '../../../../../hooks/useWidgetActions';
import { ActionTypeEnum } from '../../../../../providers/WidgetActionsProvider';
import { CustomButton } from '../../../../ui/CustomButton';
import { CustomTypography } from '../../../../ui/CustomTypography';
import WidgetRoutinWriter from '../../WidgetRoutin/WidgetRoutinWriter';
import { WomanPairRoutinPropsType } from './types';

const WomanPairRoutin = (props: WomanPairRoutinPropsType) => {
  const { actionHandler } = useWidgetActions();
  const { appName } = useSystem();

  const className = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan';

      default:
        return '';
    }
  }, [appName]);

  return (
    <>
      <div className="flex justify-end items-center border-b-[1px] pb-3  border-impo_Neutral_Surface">
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

        <div className="w-full h-[1px] my-2 bg-impo_Neutral_Surface" />
        <CustomTypography fontSize="Body_TINY" className="text-impo_Neutral_OnBackground">
          {textShorter(props.description, 80)}
        </CustomTypography>
      </div>

      <CustomButton
        className={`mt-auto ${className}`}
        fontSize="Lable_Large"
        onClick={() => actionHandler(props.button.action)}
        isDisable={props.button?.action.actionType === ActionTypeEnum.None}
      >
        {props.button.text}
      </CustomButton>
    </>
  );
};

export default WomanPairRoutin;
