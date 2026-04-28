import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePassedTime } from '@repo/core/hooks/usePassedTime';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

import { NotificationItemProps } from './type';

const NotificationItem = (props: NotificationItemProps) => {
  const { actionHandler } = useWidgetActions();
  const timeScript = usePassedTime(props.createTime);

  const onClick = () => {
    actionHandler(props.action);
  };

  return (
    <div
      className=" bg-impo_Neutral_Surface rounded-lg px-3 py-4 w-full flex flex-row-reverse gap-2 items-start"
      onClick={onClick}
    >
      {props.icon && <CustomImage src={props.icon} className="w-8 h-8 min-w-8 min-h-8" />}

      <div className="flex flex-col items-end gap-2 w-full">
        <div className="flex justify-between w-full flex-row-reverse">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {props.title}
          </CustomTypography>

          <CustomTypography fontSize="Lable_Small" className="dark:text-impo_Grey_300 text-impo_Grey_600">
            {timeScript}
          </CustomTypography>
        </div>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {props.message}
        </CustomTypography>
      </div>
    </div>
  );
};

export default NotificationItem;
