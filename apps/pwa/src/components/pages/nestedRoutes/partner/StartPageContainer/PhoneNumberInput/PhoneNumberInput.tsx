import { useState } from 'react';

import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';

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
      <Dark_Typography fontSize="Body_Large" className="text-center text-impo_Neutral_OnBackground">
        شماره موبایل، ایمیل یا کد همدلی پارتنرت رو اینجا وارد کن تا درخواست همدلیت براش ارسال بشه.
      </Dark_Typography>

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
        <Dark_Button onClick={onClickHandler} isLoading={isLoading} isDisable={!phoneNumber}>
          <Dark_Typography fontSize="Lable_Medium" className="text-center text-impo_White">
            ادامه
          </Dark_Typography>
        </Dark_Button>
      </div>
    </>
  );
};

export default PhoneNumberInput;
