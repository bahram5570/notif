import { useState } from 'react';

import { CustomButton } from '../../ui/CustomButton';
import { CustomTextareaInput } from '../../ui/CustomTextareaInput';
import { CustomTypography } from '../../ui/CustomTypography';
import { MessagerPartnerInputPropsType } from './type';

export const MessagerPartnerInput = ({
  isLoading,
  submitHandler,
  placeholder,
  isMan = false,
}: MessagerPartnerInputPropsType) => {
  const [newMessage, setNewMessage] = useState('');

  const onChangeHandler = (v: string) => {
    setNewMessage(v);
  };

  const onClick = () => {
    submitHandler(newMessage);
    setNewMessage('');
  };

  return (
    <>
      <CustomTextareaInput
        className={`!text-end  !text-impo_Neutral_OnBackground  ${isMan ? 'outline-impo_PrimaryMan_PrimaryMan' : 'outline-impo_Primary_Primary'} `}
        placeholder={placeholder}
        rows={4}
        value={newMessage}
        name="message"
        onChangeHandler={onChangeHandler}
      />

      <div className="flex justify-center items-center">
        <CustomButton
          className={`px-6 py-2 max-w-fit ${isMan && ' !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'}`}
          onClick={onClick}
          isDisable={!newMessage}
          isLoading={isLoading}
        >
          <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
            ارسال پیام
          </CustomTypography>
        </CustomButton>
      </div>
    </>
  );
};
