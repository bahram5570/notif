import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SideEnum } from '@components/pages/nestedRoutes/partner/chatContainer/MessageListContainer/Message/constants';

import ChatContainerMaker from './ChatContainerMaker';
import MessageGeneratorMedia from './MessageGeneratorMedia';
import { MessageGeneratorProps } from './types';

const MessageGenerator = ({ createTime, fileName, id, sendByUser, text }: MessageGeneratorProps) => {
  const sideType = sendByUser ? SideEnum.Self : SideEnum.Partner;
  return (
    <>
      {text.trim() !== '' && (
        <ChatContainerMaker dateTime={createTime} sideType={sideType} width={240}>
          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Black ${sideType === SideEnum.Partner && 'text-impo_Neutral_OnBackground'}`}
          >
            {text}
          </CustomTypography>
        </ChatContainerMaker>
      )}

      {fileName && <MessageGeneratorMedia dateTime={createTime} media={fileName} sideType={sideType} />}
    </>
  );
};

export default MessageGenerator;
