import { addZero } from '@utils/scripts';

import { SideTypeEnum } from '@components/pages/mainRoutes/clinic/ClinicChatContainer/__hooks__/useGetData/enums';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ChatContainerMakerProps } from './types';

const ChatContainerMaker = ({ dateTime, children, sideType, width }: ChatContainerMakerProps) => {
  const isDoctor = sideType === SideTypeEnum.Doctor;

  const date = new Date(dateTime);
  const time = `${date.getHours()}:${addZero(date.getMinutes())}`;

  return (
    <div
      className={`flex flex-col items-end gap-2 px-3 py-2 rounded-xl  ${isDoctor ? 'bg-impo_Surface_SurfaceVariant' : 'bg-impo_Pink_50 dark:bg-impo_Pink_900'}`}
      style={{
        width,
        marginLeft: isDoctor ? '0' : 'auto',
      }}
    >
      <>{children}</>

      <Dark_Typography className="text-impo_Surface_OutlineVariant" fontSize="Lable_Small">
        {time}
      </Dark_Typography>
    </div>
  );
};

export default ChatContainerMaker;
