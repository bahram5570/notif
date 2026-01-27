import BlueTickIcon from '@assets/icons/blueTick.svg';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ShareExperienceGeneratorProps } from './types';

const ShareExperienceGenerator = ({ approvedProfile, avatar, name, text }: ShareExperienceGeneratorProps) => {
  return (
    <div className="flex justify-between gap-2 w-full rounded-xl p-2">
      <div className="flex flex-col items-end gap-1 w-full">
        <div className="flex">
          <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
            {name}
          </Dark_Typography>

          {approvedProfile && <BlueTickIcon />}
        </div>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_OnSurfaceVariant">
          {text}
        </Dark_Typography>
      </div>

      <CustomImage src={avatar} width={50} height={50} />
    </div>
  );
};

export default ShareExperienceGenerator;
