import PinIcon from '@assets/shared/icons/pin.svg';

import { usePassedTime } from '../../../../hooks/usePassedTime';
import { CustomTypography } from '../../../ui/CustomTypography';
import { ShareExperienceScriptsProps } from './types';

const ShareExperienceScripts = ({ createTime, name, isPin, topicName }: ShareExperienceScriptsProps) => {
  const timeScript = `. ${usePassedTime(createTime)}`;

  return (
    <div className="flex flex-col" dir="rtl">
      <div className="flex items-center gap-1">
        {isPin && <PinIcon className="w-[13px] fill-impo_Surface_OnSurfaceVariant" />}

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {name}
        </CustomTypography>

        <CustomTypography fontSize="Lable_Small" className="text-impo_Grey_500 !min-w-fit">
          {timeScript}
        </CustomTypography>
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
        {topicName}
      </CustomTypography>
    </div>
  );
};

export default ShareExperienceScripts;
