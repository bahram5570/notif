import { addZero } from '../../../utils/numbers';

import { useSystem } from '../../../hooks/useSystem';
import { CustomTypography } from '../../ui/CustomTypography';
import { SideTypeEnum } from '../enums';
import { ClinicChatContainerMakerProps } from './type';

export const ChatContainerMaker = ({ children, dateTime, sideType, width }: ClinicChatContainerMakerProps) => {
  const { appName } = useSystem();
  const isDoctor = sideType === SideTypeEnum.Doctor;
  const isMan = appName === 'MEN_PWA';

  const date = new Date(dateTime);
  const time = `${date.getHours()}:${addZero(date.getMinutes())}`;

  return (
    <div
      className={`flex flex-col items-end gap-2 px-3 py-2 rounded-xl  ${isDoctor ? 'bg-impo_Surface_SurfaceVariant' : `${isMan ? 'bg-impo_Blue_50 dark:bg-impo_Blue_900' : 'bg-impo_Pink_50 dark:bg-impo_Pink_900'}`}`}
      style={{
        width,
        marginLeft: isDoctor ? '0' : 'auto',
      }}
    >
      <>{children}</>

      <CustomTypography
        className={`${isDoctor && 'dark:!text-impo_White'}text-impo_Surface_OutlineVariant`}
        fontSize="Lable_Small"
      >
        {time}
      </CustomTypography>
    </div>
  );
};
