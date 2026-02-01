import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { SHARE_EXPERIENCE_NEW_MAX_CHARACTERS } from '../constants';
import { ShareExperienceNewTopPartProps } from './types';

const ShareExperienceNewTopPart = ({ text, avatarImage, username }: ShareExperienceNewTopPartProps) => {
  const countScript = `${text.trim().length}/${SHARE_EXPERIENCE_NEW_MAX_CHARACTERS}`;

  return (
    <>
      <div className="w-full flex justify-between">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
          {countScript}
        </CustomTypography>

        <div className="flex gap-2">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {username}
          </CustomTypography>

          <CustomImage src={avatarImage} width={40} className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default ShareExperienceNewTopPart;
