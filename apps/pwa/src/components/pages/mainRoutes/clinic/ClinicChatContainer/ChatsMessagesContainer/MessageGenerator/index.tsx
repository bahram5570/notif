import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ChatContainerMaker from './ChatContainerMaker';
import MessageGeneratorMedia from './MessageGeneratorMedia';
import { MessageGeneratorProps } from './types';

const MessageGenerator = ({ dateTime, media, sideType, text }: MessageGeneratorProps) => {
  return (
    <>
      {text.trim() !== '' && (
        <ChatContainerMaker dateTime={dateTime} sideType={sideType} width={240}>
          <CustomTypography fontSize="Body_Small" className="text-impo_Black">
            {text}
          </CustomTypography>
        </ChatContainerMaker>
      )}

      {media && <MessageGeneratorMedia dateTime={dateTime} media={media} sideType={sideType} />}
    </>
  );
};

export default MessageGenerator;
