import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import StopIcon from '@assets/icons/stop.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import style from './styles.module.css';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { AiChatbotTextPropsType } from './type';

const AiChatbotText = ({ hintPromptText, isLoading, clickHandler, checkMultiLine }: AiChatbotTextPropsType) => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { operatingSystem } = useOperatingSystem();
  const [chatText, setChatText] = useState('');

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });
  const onClick = () => {
    clickHandler(chatText);
    setChatText('');
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

  const handleFocus = () => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';

      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
      const totalLines = Math.round(textRef.current.scrollHeight / lineHeight);
      checkMultiLine(totalLines > 2);
    }
  }, [chatText]);

  return (
    <div className="flex-1 flex flex-row-reverse justify-end items-end">
      <textarea
        ref={textRef}
        onFocus={handleFocus}
        placeholder={hintPromptText}
        className={`w-full px-3 py-2 bg-transparent outline-none resize-none ${style.scroller} text-impo_Surface_InverseSurface placeholder:text-impo_Surface_InverseSurface bg-impo_Neutral_Surface`}
        style={{
          ...typographyFontStyles,
          direction: 'rtl',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
        value={chatText}
        onChange={changeTextHandler}
        disabled={isLoading}
        onKeyDown={handleKeyDown}
        rows={1}
      />

      <div
        className="w-10 h-10 rounded-full flex flex-col justify-center items-center p-2 mx-3 bg-impo_Primary_Primary"
        onClick={onClick}
      >
        {isLoading ? (
          <StopIcon className="w-6 h-auto fill-impo_White" />
        ) : (
          <ArrowIcon className="w-6 h-auto rotate-[270deg] stroke-impo_White" />
        )}
      </div>
    </div>
  );
};

export default AiChatbotText;
