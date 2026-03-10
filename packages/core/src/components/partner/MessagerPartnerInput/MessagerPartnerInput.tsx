import { useState } from 'react';

import { CustomButton } from '../../ui/CustomButton';
import { CustomTypography } from '../../ui/CustomTypography';
import { MessagerPartnerInputPropsType } from './type';

export const MessagerPartnerInput = ({
  isLoading,
  submitHandler,
  placeholder,
  isMan = false,
}: MessagerPartnerInputPropsType) => {
  const [newMessage, setNewMessage] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const onClick = () => {
    submitHandler(newMessage);
    setNewMessage('');
  };

  return (
    <>
      <textarea
        placeholder={placeholder}
        className={`w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm placeholder:text-impo_Surface_OutlineVariant text-impo_Neutral_OnBackground border border-impo_Neutral_Surface ${isMan ? 'outline-impo_PrimaryMan_PrimaryMan' : 'outline-impo_Primary_Primary'}  bg-impo_Neutral_Surface `}
        rows={4}
        value={newMessage}
        onChange={onChangeHandler}
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
