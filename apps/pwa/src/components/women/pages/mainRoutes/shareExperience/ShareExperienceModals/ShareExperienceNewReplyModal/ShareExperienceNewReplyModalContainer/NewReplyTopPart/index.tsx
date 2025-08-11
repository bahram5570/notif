import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { NEW_REPLY_MAX_CHARACTERS } from '../constants';
import { NewReplyTopPartProps } from './types';

const NewReplyTopPart = ({ name, avatar, text }: NewReplyTopPartProps) => {
  const { colors } = useTheme();
  const countScript = `${text.trim().length}/${NEW_REPLY_MAX_CHARACTERS}`;

  return (
    <>
      <div className="w-full flex justify-between">
        <Typography scale="Body" size="Medium" color="Surface_Outline">
          {countScript}
        </Typography>

        <div className="flex gap-2">
          <Typography scale="Body" size="Medium">
            {name}
          </Typography>

          <div
            className={`w-10 h-10 rounded-full  overflow-hidden ml-0 relative `}
            style={{ backgroundColor: colors.White, border: `2px solid ${colors.White}` }}
          >
            <CustomImage src={avatar} className="!object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReplyTopPart;
