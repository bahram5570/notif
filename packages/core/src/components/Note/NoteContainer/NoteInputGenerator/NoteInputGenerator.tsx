import React, { forwardRef } from 'react';

import NoteBtnModal from './NoteBtnModal';
import { NoteTextarea } from './NoteTextarea';
import { NOTE_INPUT_LIST } from './constants';
import { NoteInputGeneratorPropsType } from './type';

export const NoteInputGenerator = forwardRef<HTMLDivElement | null, NoteInputGeneratorPropsType>(
  ({ noteValue, onChangeHandler }, ref) => {
    const onFocusHandler = (e: React.FocusEvent<HTMLDivElement, Element>) => {
      setTimeout(() => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    };

    return (
      <>
        <div className="flex flex-col gap-1 p-2 rounded-xl divide-y-[1px] bg-impo_Neutral_Background">
          {NOTE_INPUT_LIST.btnModal.map((btn, index) => {
            return <NoteBtnModal {...btn} key={index} value={noteValue[btn.name]} />;
          })}
        </div>

        <div
          ref={ref}
          onFocus={onFocusHandler}
          className="flex flex-col gap-1 p-3 rounded-xl  bg-impo_Neutral_Background"
        >
          {NOTE_INPUT_LIST.textareaInput.map((textarea, index) => {
            const isLastItem = NOTE_INPUT_LIST.textareaInput.length - 1 === index;
            return (
              <NoteTextarea
                key={index}
                {...textarea}
                value={noteValue[textarea.name]}
                onchangeHandler={onChangeHandler}
                isLastItem={isLastItem}
              />
            );
          })}
        </div>
      </>
    );
  },
);
