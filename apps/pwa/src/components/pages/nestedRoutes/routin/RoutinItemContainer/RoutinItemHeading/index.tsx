import LockIcon from '@assets/icons/LockKeyhole.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ProgramWidgetItemStatusEnum } from '../../enum';
import { RoutinItemHeadingProps } from './types';

const RoutinItemHeading = ({ title, description, icon, status }: RoutinItemHeadingProps) => {
  const isLocked = status === ProgramWidgetItemStatusEnum.locked;
  return (
    <div className="w-full flex items-center justify-between gap-5 pb-4">
      <div className="relative">
        <CustomImage src={icon} width={88} height={88} className={`${isLocked ? 'blur-[1px]' : ''} `} />
        {isLocked && (
          <LockIcon className="w-8 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 stroke-impo_Neutral_OnBackground" />
        )}
      </div>

      <div className="flex flex-col items-end gap-2">
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
          {title}
        </CustomTypography>
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default RoutinItemHeading;
