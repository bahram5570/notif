import React from 'react';

import useTheme from '@hooks/useTheme';

import { TextBlockProps } from './type';

const TextBlock = ({
  text,
  animationDelay = 0.5,
  isAnimated = false,
  onAnimationEnd,
  onAnimationStart,
  className,
  style,
  dir,
}: TextBlockProps) => {
  const { typography } = useTheme();

  function decodeUnicode(str: string) {
    return str.replace(/\\u([\dA-F]{4})/gi, (_, g1) => String.fromCharCode(parseInt(g1, 16))).replace(/\\"/g, '"');
  }

  return (
    <p
      dir={dir}
      className={`${isAnimated ? 'opacity-0 animate-fade-in' : ''} ${className}`}
      style={{
        animationDelay: `${animationDelay}s`,
        whiteSpace: 'pre-wrap',
        display: 'inline',
        ...typography.Body.Medium,
        ...style,
      }}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd ? () => onAnimationEnd(false) : undefined}
      dangerouslySetInnerHTML={{ __html: decodeUnicode(text).replace(/\n/g, '<br/>') + '&nbsp;' }}
    />
  );
};

export default TextBlock;
