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
}: AiChatbotInputPropsType) => {
  const { files, hasFile, fileDataHandler, removeFileHandler, retryUploadHandler, imageFile } = useFileUpload();
  const disableBtn = files.length === 3 || activaMedia;

  const clickHandler = (chatText: string) => {
    if (!chatText.trim() && imageFile.length === 0) return;

    if (!isLoading) {
      sessionStorage.removeItem(SHOW_SUGGESTED_QUESTION);
      submitHandler({ prompt: chatText, imageId: imageFile });
    }
  };

  return (
    <div className="flex w-full items-end justify-center px-4 gap-1">
      <div
        className={`flex flex-col  w-full  glass-card !bg-white/60 shadow-sm ${hasFile ? 'rounded-3xl py-3 ' : 'rounded-full'}  `}
      >
        {hasFile && (
          <AiChatbotFilePreview
            files={files}
            removeFileHandler={removeFileHandler}
            retryUploadHandler={retryUploadHandler}
          />
        )}

        <AiChatbotText hintPromptText={hintPromptText} isLoading={isLoading} clickHandler={clickHandler} />
      </div>
      {isShowFileInput && <AiChatbotUploadImage fileDataHandler={fileDataHandler} disableBtn={disableBtn} />}
    </div>
  );
};

export default AiChatbotInput;
