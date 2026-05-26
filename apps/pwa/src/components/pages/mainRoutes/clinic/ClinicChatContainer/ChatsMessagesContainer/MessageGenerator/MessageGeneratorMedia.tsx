import { ChatContainerMaker, ChatsFileGenerator } from '@repo/core/components/clinic';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { VoiceMessagePlayer } from '@repo/core/components/ui/VoiceMessagePlayer';
import { chatFileTypeDetector } from '@repo/core/utils/fileType';

import { MessageGeneratorMediaProps } from './types';

const MessageGeneratorMedia = ({ dateTime, sideType, media }: MessageGeneratorMediaProps) => {
  const { isImageType, isVoiceType, isFileType } = chatFileTypeDetector(media);

  return (
    <>
      <ChatContainerMaker dateTime={dateTime} sideType={sideType} width="fit-content">
        {isImageType && (
          <div className="relative rounded-xl overflow-hidden">
            <CustomImage_NEW hasPreviewImage={true} src={media} width={260} height={0} />
          </div>
        )}

        {isFileType && <ChatsFileGenerator media={media} />}
        {isVoiceType && <VoiceMessagePlayer voiceUrl={media} />}
      </ChatContainerMaker>
    </>
  );
};

export default MessageGeneratorMedia;
