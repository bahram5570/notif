import { useState } from 'react';

import { SHOW_SUGGESTED_QUESTION } from '@constants/ai.constants';
import useAiFileManager from '@hooks/__aichatbot__/useAiFileManager';

import AiChatbotFilePreview from './AiChatbotFilePreview';
import AiChatbotText from './AiChatbotText';
import { AiChatbotInputPropsType } from './type';

const AiChatbotInput = ({
  hintPromptText,
  isLoading,
  submitHandler,
  isShowFileInput,
  hasFile,
  imageFile,
  btnTopHandler,
}: AiChatbotInputPropsType) => {
  const [isMultiLine, setIsMultiLine] = useState(false);

  const checkMultiLine = (v: boolean) => {
    setIsMultiLine(v);
  };

  const clickHandler = (chatText: string) => {
    if (!chatText.trim() && imageFile.length === 0) return;

    if (!isLoading) {
      sessionStorage.removeItem(SHOW_SUGGESTED_QUESTION);
      submitHandler({ prompt: chatText, imageId: imageFile });
    }
  };

  return (
    <div
      className={`flex flex-col   glass-card !bg-white/60 shadow-sm ${hasFile ? 'rounded-3xl py-3 px-[2.5px] gap-3' : isMultiLine ? 'rounded-3xl py-2' : 'rounded-full py-2'} ${isShowFileInput ? 'w-72' : 'w-full'} `}
    >
      <AiChatbotFilePreview />

      <AiChatbotText
        hintPromptText={hintPromptText}
        isLoading={isLoading}
        clickHandler={clickHandler}
        btnTopHandler={btnTopHandler}
        checkMultiLine={checkMultiLine}
      />
    </div>
  );
};

export default AiChatbotInput;
