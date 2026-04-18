import { ChatsFileGenerator } from '@repo/core/components/clinic/ChatsFileGenerator';
import { ChatContainerMaker } from '@repo/core/components/clinic/ClinicChatContainer';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { VoiceMessagePlayer } from '@repo/core/components/ui/VoiceMessagePlayer';
import { chatFileTypeDetector } from '@repo/core/utils/fileType';

import { MessageGeneratorMediaProps } from './types';

const MessageGeneratorMedia = ({ dateTime, sideType, media }: MessageGeneratorMediaProps) => {
  const { isImageType, isVoiceType, isFileType } = chatFileTypeDetector(media);

  return (
    <>
      <ChatContainerMaker dateTime={dateTime} sideType={sideType} width="fit-content">
        {isImageType && <CustomImage hasPreviewImage={true} src={media} width={260} className="rounded-xl" />}
        {isFileType && <ChatsFileGenerator media={media} />}
        {isVoiceType && <VoiceMessagePlayer voiceUrl={media} />}
      </ChatContainerMaker>
    </>
  );
};

export default MessageGeneratorMedia;
