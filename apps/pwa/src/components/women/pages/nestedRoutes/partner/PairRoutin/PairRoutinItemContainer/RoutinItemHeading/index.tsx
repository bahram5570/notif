import LockIcon from '@assets/icons/LockKeyhole.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ProgramWidgetItemStatusEnum } from '../../enum';
import { RoutinItemHeadingProps } from './types';

const RoutinItemHeading = ({ title, description, icon, status }: RoutinItemHeadingProps) => {
  const { colors } = useTheme();

  const isLocked = status === ProgramWidgetItemStatusEnum.locked;
  return (
    <div className="w-full flex items-center justify-between gap-5 pb-4">
      <div className="relative">
        <CustomImage src={icon} width={88} height={88} className={`${isLocked ? 'blur-[1px]' : ''} `} />
        {isLocked && (
          <LockIcon
            className="w-8 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ stroke: colors.Neutral_Background }}
          />
        )}
      </div>

      <div className="flex flex-col items-end gap-2">
        <Typography scale="Title" size="Small">
          {title}
        </Typography>

        <Typography scale="Body" size="Small">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default RoutinItemHeading;
