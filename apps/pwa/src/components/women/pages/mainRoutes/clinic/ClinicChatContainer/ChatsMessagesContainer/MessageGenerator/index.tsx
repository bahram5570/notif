import Dark_Typography from '@components/ui/Dark_Typography';

import ChatContainerMaker from './ChatContainerMaker';
import MessageGeneratorMedia from './MessageGeneratorMedia';
import { MessageGeneratorProps } from './types';

const MessageGenerator = ({ dateTime, media, sideType, text }: MessageGeneratorProps) => {
  return (
    <>
      {text.trim() !== '' && (
        <ChatContainerMaker dateTime={dateTime} sideType={sideType} width={240}>
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {text}
          </Dark_Typography>
        </ChatContainerMaker>
      )}

      {media && <MessageGeneratorMedia dateTime={dateTime} media={media} sideType={sideType} />}
    </>
  );
};

export default MessageGenerator;
