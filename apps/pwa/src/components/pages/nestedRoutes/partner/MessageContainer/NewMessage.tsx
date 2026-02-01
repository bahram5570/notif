import { useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';

import useSubmit from './__hooks__/useSubmit';

const NewMessage = () => {
  const [newMessage, setNewMessage] = useState('');
  const { submitHandler, isLoading } = useSubmit();

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const onClick = () => {
    submitHandler({ text: newMessage, title: '' });
  };

  return (
    <>
      <textarea
        placeholder="برای همدل خود یک پیام ارسال کنید"
        className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm placeholder:text-impo_Surface_OutlineVariant text-impo_Neutral_OnBackground border border-impo_Neutral_Surface outline-impo_Primary_Primary bg-impo_Neutral_Surface "
        rows={4}
        value={newMessage}
        onChange={onChangeHandler}
      />
      <div className="flex justify-center items-center">
        <Dark_Button className="px-6 py-2 max-w-fit" onClick={onClick} isDisable={!newMessage} isLoading={isLoading}>
          <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
            ارسال پیام
          </CustomTypography>
        </Dark_Button>
      </div>
    </>
  );
};

export default NewMessage;
