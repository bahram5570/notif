import { ChangeEvent, useRef } from 'react';

import { toPersianNumbers } from '@repo/core/utils/numbers';

import styles from './styles.module.css';

import { NEW_REPLY_MAX_CHARACTERS } from '../constants';
import { NewReplyTextProps } from './types';

const NewReplyText = ({ text, textHandler }: NewReplyTextProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const valueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.trim().length <= NEW_REPLY_MAX_CHARACTERS) {
      textHandler(toPersianNumbers(value));
    }
  };

  return (
    <textarea
      rows={4}
      value={text}
      ref={textAreaRef}
      onChange={valueHandler}
      placeholder="نظرت رو اینجا بنویس..."
      className={`bg-impo_Neutral_Background text-impo_Neutral_OnBackground mt-3 placeholder:text-impo_Surface_OutlineVariant ${styles.textarea}`}
    />
  );
};

export default NewReplyText;
