import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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

          <CustomImage_NEW src={avatarImage} height={40} width={40} className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default ShareExperienceNewTopPart;
