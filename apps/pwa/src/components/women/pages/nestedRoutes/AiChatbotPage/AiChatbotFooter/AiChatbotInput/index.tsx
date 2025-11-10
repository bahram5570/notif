import { useEffect, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import StopIcon from '@assets/icons/stop.svg';
import { toPersianNumbers } from '@utils/numbers';

import style from './styles.module.css';

import { SHOW_SUGGESTED_QUESTION } from '@constants/ai.constants';
import useTheme from '@hooks/useTheme';

import { AiChatbotInputPropsType } from './type';

const AiChatbotInput = ({ hintPromptText, isLoading, submitHandler }: AiChatbotInputPropsType) => {
  const { colors, typography } = useTheme();
  const [chatText, setChatText] = useState('');

  const changeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(toPersianNumbers(e.target.value));
  };

  const clickHandler = () => {
    if (!chatText.trim()) return;
    if (!isLoading) {
      sessionStorage.removeItem(SHOW_SUGGESTED_QUESTION);
      submitHandler(chatText);
      setChatText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clickHandler();
    }
  };

  return (
    <div className="w-full  flex justify-end items-center relative  rounded-t-3xl px-4 pt-2 pb-0 z-50 ">
      <textarea
        placeholder={hintPromptText}
        className={` rounded-full w-full h-14 p-4 pl-14 outline-none resize-none  glass-card !bg-white/60 shadow-sm ${style.scroller} `}
        style={{ color: colors.Surface_InverseSurface, ...typography.Body.Medium, direction: 'rtl' }}
        value={chatText}
        onChange={changeTextHandler}
        disabled={isLoading}
        rows={1}
        onKeyDown={handleKeyDown}
      />
      <div
        className="w-10 h-10  rounded-full flex flex-col justify-center items-center p-2 absolute left-0  mr-5 ml-8"
        style={{ background: colors.PrimaryWoman_Primary }}
        onClick={clickHandler}
      >
        {isLoading ? (
          <StopIcon className="w-6 h-auto " style={{ fill: colors.White }} />
        ) : (
          <ArrowIcon className="w-6 h-auto rotate-[270deg]" style={{ stroke: colors.White }} />
        )}
      </div>
    </div>
  );
};

export default AiChatbotInput;
