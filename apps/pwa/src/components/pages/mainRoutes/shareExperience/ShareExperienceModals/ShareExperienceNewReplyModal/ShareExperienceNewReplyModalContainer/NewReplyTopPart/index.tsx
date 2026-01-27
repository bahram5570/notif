import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { NEW_REPLY_MAX_CHARACTERS } from '../constants';
import { NewReplyTopPartProps } from './types';

const NewReplyTopPart = ({ name, avatar, text }: NewReplyTopPartProps) => {
  const countScript = `${text.trim().length}/${NEW_REPLY_MAX_CHARACTERS}`;

  return (
    <>
      <div className="w-full flex justify-between">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_Outline">
          {countScript}
        </Dark_Typography>

        <div className="flex gap-2">
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {name}
          </Dark_Typography>

          <div
            className={`w-10 h-10 rounded-full bg-impo_Neutral_Background border-[1px] border-impo_Neutral_Background overflow-hidden ml-0 relative `}
          >
            <CustomImage src={avatar} className="!object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReplyTopPart;
