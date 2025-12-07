import React from 'react';

import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { TextBlockProps } from './type';

const TextBlock = (props: TextBlockProps) => {
  const { typography } = useTheme();

  function decodeUnicode(str: string) {
    return str.replace(/\\u([\dA-F]{4})/gi, (_, g1) => String.fromCharCode(parseInt(g1, 16))).replace(/\\"/g, '"');
  }

  const decoded = decodeUnicode(props.text);
  const finalText = toPersianNumbers(decoded);

  const onClick = () => {
    if (!props.onAnimationEnd) return;

    props.onAnimationEnd(false);
  };

  return (
    <p
      className={`${props.isAnimated ? 'opacity-0 animate-fade-in' : ''} ${props.className}`}
      style={{
        animationDelay: `${props.animationDelay}s`,
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        display: 'inline',
        ...typography.Body.Medium,
        ...props.style,
      }}
      onAnimationStart={props.onAnimationStart}
      onAnimationEnd={onClick}
      dangerouslySetInnerHTML={{
        __html: finalText.replace(/\n/g, '<br/>') + '&nbsp;',
      }}
    />
  );
};

export default TextBlock;
