import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import StopIcon from '@assets/icons/stop.svg';
import { toPersianNumbers } from '@utils/numbers';

import style from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { AiChatbotTextPropsType } from './type';

const AiChatbotText = ({ hintPromptText, isLoading, clickHandler, btnTopHandler }: AiChatbotTextPropsType) => {
  const { colors, typography } = useTheme();
  const conainerRef = useRef<HTMLDivElement | null>(null);
  const [chatText, setChatText] = useState('');

  const onClick = () => {
    clickHandler(chatText);
  };

  const changeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(toPersianNumbers(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clickHandler(chatText);
    }
  };

  useEffect(() => {
    const el = conainerRef.current;
    if (el) {
      if (window.visualViewport) {
        window.visualViewport?.addEventListener('resize', () => {
          const viewportHeight = window.visualViewport!.height;
          const windowHeight = window.innerHeight;

          const keyboardHeight = windowHeight - viewportHeight;
          btnTopHandler(keyboardHeight);
        });
      }
    }
  }, [chatText]);

  return (
    <div className="flex-1  flex flex-row-reverse justify-end items-center " ref={conainerRef}>
      <textarea
        placeholder={hintPromptText}
        className={` w-full p-3 h-14 bg-transparent  outline-none resize-none   ${style.scroller} `}
        style={{ color: colors.Surface_InverseSurface, ...typography.Body.Medium, direction: 'rtl' }}
        value={chatText}
        onChange={changeTextHandler}
        disabled={isLoading}
        rows={1}
        onKeyDown={handleKeyDown}
      />
      <div
        className="w-10 h-10  rounded-full flex flex-col justify-center items-center p-2 mx-3"
        style={{ background: colors.PrimaryWoman_Primary }}
        onClick={onClick}
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

export default AiChatbotText;
