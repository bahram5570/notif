import { useState } from 'react';

import { toEnglishNumbers, toPersianNumbers } from '../../../utils/numbers';

import { CustomButton } from '../../ui/CustomButton';
import { CustomTypography } from '../../ui/CustomTypography';
import { StartPartnerInputPropsType } from './type';

export const StartPartnerInput = (props: StartPartnerInputPropsType) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const changePhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const onClickHandler = () => {
    props.createHandler(toEnglishNumbers(phoneNumber));
  };

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  return (
    <>
      <div className="w-full">
        <input
          type="text"
          placeholder="اینجا تایپ کنید"
          className="w-full rounded-full px-4 py-3 text-right placeholder:text-right  placeholder:p-2 border border-impo_Neutral_Surface bg-impo_Neutral_Surface text-impo_Neutral_OnSurface"
          value={toPersianNumbers(phoneNumber)}
          onChange={changePhoneNumberHandler}
          onKeyUp={onKeyUpHandler}
        />
      </div>
      <div className="flex justify-center w-1/2 items-center">
        <CustomButton
          className={`${props.isMan && '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'}`}
          onClick={onClickHandler}
          isLoading={props.isLoading}
          isDisable={!phoneNumber}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-center text-impo_White">
            ادامه
          </CustomTypography>
        </CustomButton>
      </div>
    </>
  );
};
