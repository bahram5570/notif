import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotBackBtn from './AiChatbotBackBtn';
import AiChatbotLimitUploadMessage from './AiChatbotLimitUploadMessage';
import AiChatbotMoreActionsMenuBtn from './AiChatbotMoreActionsMenuBtn';
import AiChatbotTitleHeader from './AiChatbotTitleHeader';
import { AiChatbotHeaderPropsType } from './type';

const AiChatbotHeader = (props: AiChatbotHeaderPropsType) => {
  return (
    <div
      className={`fixed w-full left-0 right-0 top-0 mx-auto flex flex-col  gap-2 z-40 `}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT + 50 }}
    >
      <div
        className={`flex w-full ${props.showActionMenu ? 'justify-between' : 'justify-end'}  items-end px-4 pt-3 pb-1`}
      >
        {props.showActionMenu && (
          <AiChatbotMoreActionsMenuBtn
            welcomingType={props.welcomingType}
            chatId={props.chatId}
            disableDeleteBtn={props.disableDeleteBtn}
            categoryIdData={props.categoryIdData}
            itemIdData={props.itemIdData}
          />
        )}

        <div className="flex justify-center items-center gap-2">
          {props.showActionMenu && <AiChatbotTitleHeader chatTitle={props.chatTitle} />}
          <AiChatbotBackBtn />
        </div>
      </div>
      {props.imageType && props.imageUsageLimit && props.imageUsageLimit > 0 && (
        <AiChatbotLimitUploadMessage
          currentImageUsage={props.currentImageUsage}
          imageUsageLimit={props.imageUsageLimit}
          mediaLimitDate={props.mediaLimitDate}
        />
      )}
    </div>
  );
};

export default AiChatbotHeader;
