import { SideTypeEnum } from '@repo/core/components/clinic';
import { ChatContainerMaker } from '@repo/core/components/clinic/ClinicChatContainer';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import MessageGeneratorMedia from './MessageGeneratorMedia';
import { MessageGeneratorProps } from './types';

const MessageGenerator = ({ createTime, fileName, id, sendByUser, text }: MessageGeneratorProps) => {
  const sideType = sendByUser ? SideTypeEnum.Patient : SideTypeEnum.Doctor;
  return (
    <>
      {text.trim() !== '' && (
        <ChatContainerMaker dateTime={createTime} sideType={sideType} width={240}>
          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Black ${sideType === SideTypeEnum.Doctor && 'text-impo_Neutral_OnBackground'}`}
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
