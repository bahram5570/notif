import React, { forwardRef } from 'react';

import useTheme from '@hooks/useTheme';

import NoteBtnModal from './NoteBtnModal';
import NoteTextarea from './NoteTextarea';
import { NOTE_INPUT_LIST } from './constants';
import { NoteInputGeneratorPropsType } from './type';

const NoteInputGenerator = forwardRef<HTMLDivElement | null, NoteInputGeneratorPropsType>(
  ({ noteValue, onChangeHandler }, ref) => {
    const { colors } = useTheme();

    const onFocusHandler = (e: React.FocusEvent<HTMLDivElement, Element>) => {
      setTimeout(() => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    };

    return (
      <>
        <div className="flex flex-col gap-1 p-2 rounded-xl divide-y-[1px]" style={{ background: colors.White }}>
          {NOTE_INPUT_LIST.btnModal.map((btn, index) => {
            return <NoteBtnModal {...btn} key={index} value={noteValue[btn.name]} />;
          })}
        </div>

        <div
          className="flex flex-col gap-1 p-3 rounded-xl divide-y-[1px]"
          ref={ref}
          onFocus={onFocusHandler}
          style={{ background: colors.White }}
        >
          {NOTE_INPUT_LIST.textareaInput.map((textarea, index) => {
            return (
              <NoteTextarea
                {...textarea}
                key={index}
                value={noteValue[textarea.name]}
                onchangeHandler={onChangeHandler}
              />
            );
          })}
        </div>
      </>
    );
  },
);

export default NoteInputGenerator;
