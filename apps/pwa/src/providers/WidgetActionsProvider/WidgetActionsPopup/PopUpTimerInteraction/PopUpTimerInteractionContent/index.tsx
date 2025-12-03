import CancelIcon from '@assets/icons/cancel.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import useCheckJson from '../__hooks__/useCheckJson';
import { PopUpTimerInteractionContentPropsType } from './type';

const PopUpTimerInteractionContent = ({ actionCompleteHandler, data }: PopUpTimerInteractionContentPropsType) => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();
  const { jsonData, isJson } = useCheckJson({ icon: data.icon });

  const closeHandler = () => {
    actionCompleteHandler();
  };

  const onClick = () => {
    actionCompleteHandler();
    actionHandler(data.action);
  };
  return (
    <div
      className=" rounded-full flex flex-row-reverse justify-between pl-2 pr-3 py-3 items-center gap-5 relative "
      style={{
        backgroundColor: colors.Neutral_Background,
        boxShadow: '0px 8px 24px rgba(114, 114, 114, 0.18)',
      }}
    >
      <div className="flex flex-row-reverse gap-2" onClick={onClick}>
        <div className="w-10 h-10">
          {isJson ? jsonData && <LottieJson animationData={jsonData} /> : <CustomImage src={data.icon} />}
        </div>

        <div className="flex flex-col items-end gap-1">
          <Typography scale="Lable" size="Medium">
            {data.title}
          </Typography>
          <Typography scale="Lable" size="Small">
            {data.description}
          </Typography>
        </div>
      </div>

      <div className="w-8 h-8 flex justify-end items-center" onClick={closeHandler}>
        <CancelIcon className="w-5 h-auto" style={{ stroke: colors.Surface_OnSurfaceVariant }} />
      </div>
    </div>
  );
};

export default PopUpTimerInteractionContent;
