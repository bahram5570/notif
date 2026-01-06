import PinIcon from '@assets/icons/pin.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import useShareExperiencePassedTime from '@components/women/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { ShareExperienceScriptsProps } from './types';

const ShareExperienceScripts = ({ createTime, name, isPin, topicName }: ShareExperienceScriptsProps) => {
  const timeScript = useShareExperiencePassedTime(createTime);

  return (
    <div className="flex flex-col" dir="rtl">
      <div className="flex items-center gap-1">
        {isPin && <PinIcon className="w-[13px] fill-impo_Surface_OnSurfaceVariant" />}

        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {name}
        </Dark_Typography>

        <Dark_Typography fontSize="Lable_Small" className="text-impo_Grey_500">{`. ${timeScript}`}</Dark_Typography>
      </div>

      <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
        {topicName}
      </Dark_Typography>
    </div>
  );
};

export default ShareExperienceScripts;
