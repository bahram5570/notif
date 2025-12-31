'use client';

import GoBack from '../components/GoBack';
import welcomVectorMini from '@assets/images/blackFriday/welcomVectorMini.webp';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import Spinner from '@components/ui/Spinner';

import { useSendPhone } from '../Hooks/useSendPhone';
import InputModule from './InputModule';

const EnterPhonePage = () => {
  const { phoneNumber, valueHandler, submitHandler, isLoading } = useSendPhone();

  return (
    <div className="w-full max-w-[500px] h-[100dvh] relative bg-gradient-to-b from-[#FFFFFF] to-[#FFE2EA]">
      <div className="absolute top-6 right-7">
        <GoBack />
      </div>

      <CustomImage src={welcomVectorMini} alt="welcomVectorMini" />

      <div className="-mt-14">
        <CustomTypography fontSize="Title_Small" tagType="p" className="text-center">
          برای شروع، شماره‌ات رو اینجا وارد کن
        </CustomTypography>

        <div className="flex justify-center mt-4 mx-4">
          <InputModule
            autoFocus
            value={phoneNumber}
            placeHolder="اینجا بنویس"
            valueHandler={valueHandler}
            isTextTyps={false}
          />
        </div>

        <div className="flex justify-center mt-4">
          {phoneNumber && (
            <CustomButton onClick={submitHandler}>
              {isLoading ? <Spinner className="!border-impo_White" size={18} /> : 'ادامه'}
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterPhonePage;
