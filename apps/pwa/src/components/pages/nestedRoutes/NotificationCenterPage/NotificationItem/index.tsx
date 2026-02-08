import useShareExperiencePassedTime from '@components/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';
import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { NotificationItemProps } from './type';

const NotificationItem = (props: NotificationItemProps) => {
  const { actionHandler } = useWidgetActions();
  const timeScript = useShareExperiencePassedTime(props.createTime);

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
          <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {props.title}
          </Dark_Typography>
          <Dark_Typography fontSize="Lable_Small" className="dark:text-impo_Grey_300 text-impo_Grey_600">
            {timeScript}
          </Dark_Typography>
        </div>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {props.message}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default NotificationItem;
