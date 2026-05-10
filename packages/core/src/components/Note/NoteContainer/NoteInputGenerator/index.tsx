import React, { forwardRef } from 'react';

import NoteDateInput from './NoteDateInput';
import { NoteTextarea } from './NoteTextarea';
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
          <NoteDateInput value={noteValue.time} />
        </div>

        <div
          ref={ref}
          onFocus={onFocusHandler}
          className="flex flex-col gap-1 p-3 rounded-xl  bg-impo_Neutral_Background"
        >
          <NoteTextarea name="title" label="عنوان یادداشت" value={noteValue.title} onchangeHandler={onChangeHandler} />
          <NoteTextarea name="text" label="توضیحات" value={noteValue.text} onchangeHandler={onChangeHandler} />
        </div>
      </>
    );
  },
);
