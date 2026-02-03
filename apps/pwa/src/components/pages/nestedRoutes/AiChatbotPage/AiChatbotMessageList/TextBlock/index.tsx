import React from 'react';

import { decodeUnicode } from '../AiMessage/utils';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { TextBlockProps } from './type';

const TextBlock = (props: TextBlockProps) => {
  const { operatingSystem } = useOperatingSystem();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });
  const decoded = decodeUnicode(props.text);
  const finalText = toPersianNumbers(decoded);

  const onClick = () => {
    if (!props.onAnimationEnd) return;

    props.onAnimationEnd(false);
  };

  return (
    <p
      className={`${props.isAnimated ? 'opacity-0 animate-fade-in' : ''} ${props.className} !text-impo_Neutral_OnBackground `}
      style={{
        animationDelay: `${props.animationDelay}s`,
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        display: 'inline',
        ...typographyFontStyles,
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
