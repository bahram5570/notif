import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import StopIcon from '@assets/icons/stop.svg';
import { toPersianNumbers } from '@utils/numbers';

import style from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { AiChatbotTextPropsType } from './type';

const AiChatbotText = ({
  hintPromptText,
  isLoading,
  clickHandler,
  btnBottomHandler,
  checkMultiLine,
}: AiChatbotTextPropsType) => {
  const { colors, typography } = useTheme();
  const [btnTop, setBtnTop] = useState(false);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [chatText, setChatText] = useState('');

  const onClick = () => {
    clickHandler(chatText);
    setChatText('');
  };

  const onBlur = () => {
    setBtnTop(false);
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
    setBtnTop(true);
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

  useEffect(() => {
    if (!btnTop) return;

    const vv = window.visualViewport;
    if (!vv) return;

    const updatePosition = () => {
      const keyboardHeight = window.innerHeight - (vv.height + vv.offsetTop);
      if (btnBottomHandler) btnBottomHandler(keyboardHeight > 0 ? keyboardHeight : 0);
    };

    vv.addEventListener('resize', updatePosition);
    vv.addEventListener('scroll', updatePosition);

    return () => {
      vv.removeEventListener('resize', updatePosition);
      vv.removeEventListener('scroll', updatePosition);
    };
  }, [btnTop]);

  return (
    <div className="flex-1 flex flex-row-reverse justify-end items-end">
      <textarea
        ref={textRef}
        onFocus={handleFocus}
        placeholder={hintPromptText}
        className={`w-full px-3 py-2 bg-transparent outline-none resize-none ${style.scroller}`}
        style={{
          color: colors.Surface_InverseSurface,
          ...typography.Body.Medium,
          direction: 'rtl',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
        value={chatText}
        onChange={changeTextHandler}
        disabled={isLoading}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        rows={1}
      />

      <div
        className="w-10 h-10 rounded-full flex flex-col justify-center items-center p-2 mx-3"
        style={{ background: colors.PrimaryWoman_Primary }}
        onClick={onClick}
      >
        {isLoading ? (
          <StopIcon className="w-6 h-auto" style={{ fill: colors.White }} />
        ) : (
          <ArrowIcon className="w-6 h-auto rotate-[270deg]" style={{ stroke: colors.White }} />
        )}
      </div>
    </div>
  );
};

export default AiChatbotText;
