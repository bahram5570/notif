import { colorFormatConverter, textShorter } from '@utils/scripts';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import WidgetRoutinWriter from '../../WidgetRoutin/WidgetRoutinWriter';
import { WomanPairRoutinPropsType } from './type';

const WomanPairRoutin = (props: WomanPairRoutinPropsType) => {
  const { actionHandler } = useWidgetActions();
  const { colors } = useTheme();
  return (
    <>
      <div
        className="flex justify-end items-center border-b-[1px] pb-3 mb-3"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {props.title}
        </Typography>
      </div>

      <div className="flex flex-col items-end rounded-xl p-3 ">
        <WidgetRoutinWriter
          writerName={props.writerName}
          writerIcon={props.writerIcon}
          writerSpeciality={props.writerSpeciality}
        />

        <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Blue_100 }} />

        <Typography scale="Body" size="Small">
          {textShorter(props.description, 80)}
        </Typography>
      </div>

      <Button
        size="medium"
        variant="fill"
        className="mt-auto"
        color="FREE-STYLES"
        onClick={() => actionHandler(props.button.action)}
        buttonColor={colorFormatConverter(props.button.backgroundColor)}
        contentsColor={colorFormatConverter(props.button.foregroundColor)}
        isDisable={props.button?.action.actionType === ActionTypeEnum.None}
      >
        {props.button.text}
      </Button>
    </>
  );
};

export default WomanPairRoutin;
