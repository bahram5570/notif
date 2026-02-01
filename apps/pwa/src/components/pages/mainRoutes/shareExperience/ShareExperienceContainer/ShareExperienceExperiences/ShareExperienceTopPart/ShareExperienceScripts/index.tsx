import PinIcon from '@assets/icons/pin.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useShareExperiencePassedTime from '@components/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { ShareExperienceScriptsProps } from './types';

const ShareExperienceScripts = ({ createTime, name, isPin, topicName }: ShareExperienceScriptsProps) => {
  const timeScript = useShareExperiencePassedTime(createTime);

  return (
    <div className="flex flex-col" dir="rtl">
      <div className="flex items-center gap-1">
        {isPin && <PinIcon className="w-[13px] fill-impo_Surface_OnSurfaceVariant" />}

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {name}
        </CustomTypography>

        <CustomTypography fontSize="Lable_Small" className="text-impo_Grey_500">{`. ${timeScript}`}</CustomTypography>
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
        {topicName}
      </CustomTypography>
    </div>
  );
};

export default ShareExperienceScripts;
