import React, { useState } from 'react';

import PaperPlaneRightIcon from '@assets/icons/PaperPlaneRight.svg';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import { ItemPropsType } from './__hooks__/useGetData/type';
import { initailMessageValue } from './constants';
import { InputPropsType } from './type';

const Input = ({ submitHandler, onChange }: InputPropsType) => {
  const [messageValue, setMessageValue] = useState<ItemPropsType>(initailMessageValue);

  const onClick = () => {
    onChange(messageValue);
    submitHandler({ text: messageValue.text });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue({ ...messageValue, text: e.target.value });
  };

  return (
    <div
      className="mt-auto fixed bottom-0 left-0 right-0 flex items-center gap-2 h-20 p-3 backdrop-blur-md mx-auto z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <textarea
        placeholder="اینجا تایپ کنید"
        className="w-full text-end px-4 py-3 rounded-full focus-visible:outline-1 focus-visible:outline placeholder:text-sm border bg-impo_Neutral_Surface text-impo_Neutral_OnSurface border-impo_Neutral_Surface outline-impo_Primary_Primary"
        rows={1}
        value={messageValue.text}
        onChange={onChangeHandler}
      />

      <button
        className={`h-11 w-11 rounded-full flex justify-center items-center ${!messageValue.text ? 'bg-impo_Surface_SurfaceVariant' : 'bg-impo_Primary_Primary'}`}
        style={{
          cursor: !messageValue ? 'not-allowed' : 'pointer',
        }}
        onClick={onClick}
      >
        <PaperPlaneRightIcon
          className={`w-6 h-6 ${!messageValue.text ? 'fill-impo_Surface_OutlineVariant' : 'fill-impo_PrimaryMan_OnPrimaryMan'}`}
        />
      </button>
    </div>
  );
};

export default Input;
