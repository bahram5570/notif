import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { SHARE_EXPERIENCE_NEW_MAX_CHARACTERS } from '../constants';
import { ShareExperienceNewTopPartProps } from './types';

const ShareExperienceNewTopPart = ({ text, avatarImage, username }: ShareExperienceNewTopPartProps) => {
  const countScript = `${text.trim().length}/${SHARE_EXPERIENCE_NEW_MAX_CHARACTERS}`;

  return (
    <>
      <div className="w-full flex justify-between">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_Outline">
          {countScript}
        </Dark_Typography>

        <div className="flex gap-2">
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {username}
          </Dark_Typography>

          <CustomImage src={avatarImage} width={40} className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default ShareExperienceNewTopPart;
