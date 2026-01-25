import { chatFileTypeDetector } from '@components/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/__utils__';

import ChatsFileGenerator from '@components/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/ChatsFileGenerator';
import CustomImage from '@components/ui/CustomImage';

import ChatContainerMaker from './ChatContainerMaker';
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
