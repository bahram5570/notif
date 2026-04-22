import { useMemo, useState } from 'react';

import { useSystem } from '../../../hooks/useSystem';
import { CustomButton } from '../../ui/CustomButton';
import { CustomTextareaInput } from '../../ui/CustomTextareaInput';
import { CustomTypography } from '../../ui/CustomTypography';
import { MessagerPartnerInputPropsType } from './type';

export const MessagerPartnerInput = ({ isLoading, submitHandler, placeholder }: MessagerPartnerInputPropsType) => {
  const { appName } = useSystem();
  const [newMessage, setNewMessage] = useState('');

  const onChangeHandler = (v: string) => {
    setNewMessage(v);
  };

  const onClick = () => {
    submitHandler(newMessage);
    setNewMessage('');
  };

  const theme = useMemo<{ outlineColor: string; className: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          outlineColor: 'outline-impo_PrimaryMan_PrimaryMan',
          className: '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          outlineColor: 'outline-impo_Primary_Primary',
          className: '',
        };
    }
  }, [appName]);

  return (
    <>
      <CustomTextareaInput
        className={`  !text-impo_Neutral_OnBackground  ${theme.outlineColor} `}
        placeholder={placeholder}
        rows={4}
        value={newMessage}
        name="message"
        onChangeHandler={onChangeHandler}
      />

      <div className="flex justify-center items-center">
        <CustomButton
          className={`px-6 py-2 max-w-fit ${theme.className}`}
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
