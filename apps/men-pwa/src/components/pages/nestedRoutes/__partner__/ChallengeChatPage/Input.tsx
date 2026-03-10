import React, { useState } from 'react';

import PaperPlaneRightIcon from '@assets/shared/icons/PaperPlaneRight.svg';
import { TextareaInput } from '@repo/core/components/partner/CreateMemoryForm';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { MessageItemType } from './__hooks__/useMessageData/type';
import { initailMessageValue } from './constants';
import { InputPropsType } from './type';

const Input = ({ submitHandler, onChange }: InputPropsType) => {
  const [messageValue, setMessageValue] = useState<MessageItemType>(initailMessageValue);

  const onClick = () => {
    if (!messageValue.text.trim()) {
      return;
    }

    onChange(messageValue);
    submitHandler(messageValue.text);
    setMessageValue(initailMessageValue);
  };

  const onChangeHandler = (v: string) => {
    setMessageValue({ ...messageValue, text: v });
  };

  return (
    <div
      className="mt-auto fixed bottom-0 left-0 right-0 flex items-center gap-2 h-20 p-3 backdrop-blur-md mx-auto z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <TextareaInput
        placeholder="اینجا تایپ کنید"
        className="outline-impo_PrimaryMan_PrimaryMan w-full"
        rows={1}
        value={messageValue.text}
        onChangeHandler={onChangeHandler}
        name="text"
      />

      <CustomButton
        className={`!h-11 !w-11 rounded-full flex justify-center items-center ${!messageValue.text ? '!bg-impo_Surface_SurfaceVariant !border-impo_Surface_SurfaceVariant' : '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'}`}
        style={{
          cursor: !messageValue ? 'not-allowed' : 'pointer',
        }}
        onClick={onClick}
      >
        <PaperPlaneRightIcon
          className={`w-6 h-6 ${!messageValue.text ? 'fill-impo_Surface_OutlineVariant' : 'fill-impo_PrimaryMan_OnPrimaryMan'}`}
        />
      </CustomButton>
    </div>
  );
};

export default Input;
