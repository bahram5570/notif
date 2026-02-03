import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toEnglishNumbers, toPersianNumbers } from '@repo/core/utils/numbers';

import useCreate from '../__hooks__/useCreate';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const { createHandler, isLoading } = useCreate();

  const changePhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const onClickHandler = () => {
    createHandler(toEnglishNumbers(phoneNumber));
  };

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  return (
    <>
      <CustomTypography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground">
        شماره موبایل، ایمیل یا کد همدلی پارتنرت رو اینجا وارد کن تا درخواست همدلیت براش ارسال بشه.
      </CustomTypography>

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
        <CustomButton onClick={onClickHandler} isLoading={isLoading} isDisable={!phoneNumber}>
          <CustomTypography fontSize="Lable_Medium" className="text-center text-impo_White">
            ادامه
          </CustomTypography>
        </CustomButton>
      </div>
    </>
  );
};

export default PhoneNumberInput;
