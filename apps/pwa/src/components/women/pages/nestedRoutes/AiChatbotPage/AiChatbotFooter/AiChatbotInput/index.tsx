import { SHOW_SUGGESTED_QUESTION } from '@constants/ai.constants';

import AiChatbotFilePreview from './AiChatbotFilePreview';
import AiChatbotText from './AiChatbotText';
import AiChatbotUploadImage from './AiChatbotUploadImage';
import useFileUpload from './__hooks__/useFileUpload';
import { AiChatbotInputPropsType } from './type';

const AiChatbotInput = ({
  hintPromptText,
  isLoading,
  submitHandler,
  isShowFileInput,
  activaMedia,
  btnTopHandler,
}: AiChatbotInputPropsType) => {
  const { files, hasFile, fileDataHandler, removeFileHandler, retryUploadHandler, imageFile, disableBtn } =
    useFileUpload({ activaMedia });

  const clickHandler = (chatText: string) => {
    if (!chatText.trim() && imageFile.length === 0) return;

    if (!isLoading) {
      sessionStorage.removeItem(SHOW_SUGGESTED_QUESTION);
      submitHandler({ prompt: chatText, imageId: imageFile });
    }
  };

  return (
    <div className="flex w-full items-end justify-center px-4 gap-1 h-14">
      <div
        className={`flex flex-col   glass-card !bg-white/60 shadow-sm ${hasFile ? 'rounded-3xl py-3 ' : 'rounded-full'} ${isShowFileInput ? 'w-72' : 'w-full'} `}
      >
        {hasFile && (
          <AiChatbotFilePreview
            files={files}
            removeFileHandler={removeFileHandler}
            retryUploadHandler={retryUploadHandler}
          />
        )}

        <AiChatbotText
          hintPromptText={hintPromptText}
          isLoading={isLoading}
          clickHandler={clickHandler}
          btnTopHandler={btnTopHandler}
        />
      </div>
      {isShowFileInput && <AiChatbotUploadImage fileDataHandler={fileDataHandler} disableBtn={disableBtn} />}
    </div>
  );
};

export default AiChatbotInput;
