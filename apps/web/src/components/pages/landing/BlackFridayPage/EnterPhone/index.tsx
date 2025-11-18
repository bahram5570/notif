'use client';

import { useState } from 'react';

import GoBack from '../components/GoBack';
import welcomVectorMini from '@assets/images/blackFriday/welcomVectorMini.webp';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';
import { useRouter } from 'next/navigation';

const EnterPhonePage = () => {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

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
        <div className="flex justify-center mt-4">
          <CustomInput
            maxLength={11}
            style={{ direction: 'ltr' }}
            className="!w-[385px] p-4 border border-[#D0D0D0] rounded-full text-center"
            value={value}
            onValue={setValue}
          />
        </div>
        <div className="flex justify-center mt-4">
          {value && (
            <CustomButton
              varient="fill"
              onClick={() => {
                router.push('/landing/blackFriday/survey');
              }}
            >
              ادامه
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterPhonePage;
