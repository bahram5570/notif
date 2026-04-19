import { ChatContainerMaker, ChatsFileGenerator } from '@repo/core/components/clinic';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { chatFileTypeDetector } from '@repo/core/utils/fileType';

import { MessageGeneratorMediaProps } from './types';

const MessageGeneratorMedia = ({ dateTime, sideType, media }: MessageGeneratorMediaProps) => {
  const { isImageType } = chatFileTypeDetector(media);

  return (
    <>
      <ChatContainerMaker dateTime={dateTime} sideType={sideType} width="fit-content">
        {isImageType && (
          <CustomImage hasPreviewImage={true} src={media} width={260} className="rounded-xl" objectFit="cover" />
        )}
        {!isImageType && <ChatsFileGenerator media={media} />}
      </ChatContainerMaker>
    </>
  );
};

export default MessageGeneratorMedia;
