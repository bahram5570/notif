import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { NEW_REPLY_MAX_CHARACTERS } from '../constants';
import { NewReplyTopPartProps } from './types';

const NewReplyTopPart = ({ name, avatar, text }: NewReplyTopPartProps) => {
  const countScript = `${text.trim().length}/${NEW_REPLY_MAX_CHARACTERS}`;

  return (
    <>
      <div className="w-full flex justify-between">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
          {countScript}
        </CustomTypography>

        <div className="flex gap-2">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {name}
          </CustomTypography>

          <div
            className={`w-10 h-10 rounded-full bg-impo_Neutral_Background border-[1px] border-impo_Neutral_Background overflow-hidden ml-0 relative `}
          >
            <CustomImage_NEW src={avatar} className="!object-cover" fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReplyTopPart;
