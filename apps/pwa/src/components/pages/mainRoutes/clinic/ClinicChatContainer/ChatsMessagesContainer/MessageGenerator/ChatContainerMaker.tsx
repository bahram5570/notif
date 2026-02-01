import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { addZero } from '@utils/scripts';

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
                  ${isDoctor ? 'ml-0 dark:bg-impo_Surface_OutlineVariant bg-impo_Surface_SurfaceVariant' : 'ml-auto bg-impo_Pink_50 dark:bg-impo_Pink_900'}
                `}
    >
      <>{children}</>

      <CustomTypography
        fontSize="Lable_Small"
        className="dark:text-impo_Surface_SurfaceVariant text-impo_Surface_Outline"
      >
        {time}
      </CustomTypography>
    </div>
  );
};

export default ChatContainerMaker;
