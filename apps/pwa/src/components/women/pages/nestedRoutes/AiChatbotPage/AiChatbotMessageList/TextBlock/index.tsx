import React from 'react';

import { decodeUnicode } from '../AiMessage/utils';
import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { TextBlockProps } from './type';

const TextBlock = (props: TextBlockProps) => {
  const { typography } = useTheme();

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
