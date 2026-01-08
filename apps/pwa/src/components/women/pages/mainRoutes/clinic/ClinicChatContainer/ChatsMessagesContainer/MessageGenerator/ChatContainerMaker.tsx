import { addZero } from '@utils/scripts';

import Dark_Typography from '@components/ui/Dark_Typography';

import { SideTypeEnum } from '../../__hooks__/useGetData/enums';
import { ChatContainerMakerProps } from './types';

const ChatContainerMaker = ({ dateTime, children, sideType, width }: ChatContainerMakerProps) => {
  const isDoctor = sideType === SideTypeEnum.Doctor;

  const date = new Date(dateTime);
  const time = `${date.getHours()}:${addZero(date.getMinutes())}`;

  return (
    <div
      style={{ width }}
      className={`
                  flex 
                  flex-col 
                  items-end 
                  gap-2 
                  px-3 
                  py-2 
                  rounded-xl
                  ${isDoctor ? 'ml-0 bg-impo_Surface_SurfaceVariant' : 'ml-auto bg-impo_Pink_50'}
                `}
    >
      <>{children}</>

      <Dark_Typography fontSize="Lable_Small" className="text-impo_Surface_Outline">
        {time}
      </Dark_Typography>
    </div>
  );
};

export default ChatContainerMaker;
