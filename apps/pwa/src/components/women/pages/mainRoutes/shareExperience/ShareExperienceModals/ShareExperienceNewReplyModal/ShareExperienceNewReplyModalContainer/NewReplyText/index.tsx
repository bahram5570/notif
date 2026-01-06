import { ChangeEvent, useEffect, useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import { NEW_REPLY_MAX_CHARACTERS } from '../constants';
import { NewReplyTextProps } from './types';

const NewReplyText = ({ text, textHandler, onChangeBtnTop }: NewReplyTextProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const valueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.trim().length <= NEW_REPLY_MAX_CHARACTERS) {
      textHandler(toPersianNumbers(value));
    }
  };

  useEffect(() => {
    const el = textAreaRef.current;
    if (el) {
      const elTop = el.getBoundingClientRect().height;
      const elHeight = el.offsetHeight;
      const elPaddingTop = 60;
      const top = elTop + elHeight + elPaddingTop;
      onChangeBtnTop(top);
    }
  }, [text]);

  return (
    <textarea
      rows={4}
      value={text}
      ref={textAreaRef}
      onChange={valueHandler}
      placeholder="نظرت رو اینجا بنویس..."
      className={`bg-impo_Neutral_Background text-impo_Neutral_OnBackground ${styles.textarea}`}
    />
  );
};

export default NewReplyText;
