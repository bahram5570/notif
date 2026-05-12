import { ChatContainerMaker, ChatsFileGenerator } from '@repo/core/components/clinic';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { chatFileTypeDetector } from '@repo/core/utils/fileType';

import { MessageGeneratorMediaProps } from './types';

const MessageGeneratorMedia = ({ dateTime, sideType, media }: MessageGeneratorMediaProps) => {
  const { isImageType } = chatFileTypeDetector(media);

  return (
    <>
      <ChatContainerMaker dateTime={dateTime} sideType={sideType} width="fit-content">
        {isImageType && (
          <CustomImage_NEW hasPreviewImage={true} src={media} width={260} className="rounded-xl object-cover" />
        )}
        {!isImageType && <ChatsFileGenerator media={media} />}
      </ChatContainerMaker>
    </>
  );
};

export default MessageGeneratorMedia;
