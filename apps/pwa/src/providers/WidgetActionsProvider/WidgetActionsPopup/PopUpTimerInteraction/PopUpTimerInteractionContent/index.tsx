import CancelIcon from '@assets/icons/cancel.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import useCheckJson from '../__hooks__/useCheckJson';
import { PopUpTimerInteractionContentPropsType } from './type';

const PopUpTimerInteractionContent = ({ actionCompleteHandler, data }: PopUpTimerInteractionContentPropsType) => {
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
      className=" rounded-full flex flex-row-reverse justify-between pl-2 pr-3 py-3 items-center gap-5 relative bg-impo_Neutral_Background "
      style={{
        boxShadow: '0px 8px 24px rgba(114, 114, 114, 0.18)',
      }}
    >
      <div className="flex flex-row-reverse gap-2" onClick={onClick}>
        <div className="w-10 h-10">
          {isJson ? jsonData && <LottieJson animationData={jsonData} /> : <CustomImage src={data.icon} />}
        </div>

        <div className="flex flex-col items-end gap-1">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {data.title}
          </CustomTypography>
          <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
            {data.description}
          </CustomTypography>
        </div>
      </div>

      <div className="w-8 h-8 flex justify-end items-center" onClick={closeHandler}>
        <CancelIcon className="w-5 h-auto stroke-impo_Surface_OnSurfaceVariant" />
      </div>
    </div>
  );
};

export default PopUpTimerInteractionContent;
