import { useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import StopIcon from '@assets/icons/stop.svg';

import style from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { AiChatbotInputPropsType } from './type';

const AiChatbotInput = ({ submitHandler, hintPromptText, isLoading }: AiChatbotInputPropsType) => {
  const { colors, typography } = useTheme();
  const [chatText, setChatText] = useState('');

  const changeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(e.target.value);
  };

  const clickHandler = () => {
    if (!chatText.trim()) return;
    if (!isLoading) {
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
    <div
      className="w-full  flex justify-end items-center relative  rounded-t-3xl p-4 z-50 "
      style={{ background: colors.Neutral_Surface }}
    >
      <textarea
        placeholder={hintPromptText}
        className={` rounded-full w-full h-auto px-4 py-3 outline-none resize-none ${style.scroller} `}
        style={{ color: colors.Surface_Outline, ...typography.Body.Medium, direction: 'rtl' }}
        value={chatText}
        onChange={changeTextHandler}
        disabled={isLoading}
        rows={1}
        onKeyDown={handleKeyDown}
      />
      <div
        className="w-8 h-8  rounded-full flex flex-col justify-center items-center p-2 absolute left-0 mx-5"
        style={{ background: `linear-gradient(139.27deg, #3B82F6 -52.67%, #F24F7A 65.58%)` }}
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
