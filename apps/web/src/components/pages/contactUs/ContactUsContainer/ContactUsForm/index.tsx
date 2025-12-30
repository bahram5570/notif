'use client';

import { useState } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import useSubmit from './__hooks__/useSubmit';
import { UserInfoType } from './type';

const ContactUsForm = () => {
  const { submitHandler } = useSubmit();
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);

  const onChangeHandler = (v: string | number, name: string) => {
    setUserInfo({ ...userInfo, [name]: v });
  };

  const typographyDetails = typographyFontStylesMaker({
    operatingSystem,
    fontSize: 'Body_Medium',
    isWeb: !breakPoint.laptop,
  });

  return (
    <div className="flex flex-col sm:gap-3 gap-4  mx-4">
      <div className="flex sm:flex-row items-center flex-col sm:gap-3 gap-4">
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
              نام و نام خانوادگی
            </CustomTypography>
          </div>

          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.fullName || ''}
            className="w-full sm:p-4 p-2 rounded-xl bg-impo_Neutral_Surface !outline-impo_Primary_Primary"
            onValue={(v) => onChangeHandler(v, 'fullName')}
            placeholder="متن خود را وارد کنید"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
              موضوع
            </CustomTypography>
          </div>
          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.subject || ''}
            className="w-full sm:p-4 p-2 rounded-xl bg-impo_Neutral_Surface !outline-impo_Primary_Primary"
            onValue={(v) => onChangeHandler(v, 'subject')}
            placeholder="متن خود را وارد کنید"
          />
        </div>
      </div>
      <div className="flex sm:flex-row items-center flex-col sm:gap-3 gap-4">
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
              ایمیل
            </CustomTypography>
          </div>

          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.email || ''}
            className="w-full sm:p-4 p-2 rounded-xl bg-impo_Neutral_Surface !outline-impo_Primary_Primary"
            onValue={(v) => onChangeHandler(v, 'email')}
            placeholder="متن خود را وارد کنید"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
              شماره تلفن
            </CustomTypography>
          </div>

          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.phoneNumber || ''}
            className="w-full sm:p-4 p-2 rounded-xl bg-impo_Neutral_Surface !outline-impo_Primary_Primary"
            onValue={(v) => onChangeHandler(v, 'phoneNumber')}
            placeholder="متن خود را وارد کنید"
            maxLength={11}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 pb-2">
          <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
            توضیحات
          </CustomTypography>
        </div>

        <textarea
          rows={6}
          style={{ ...typographyDetails }}
          value={userInfo?.description || ''}
          className="w-full sm:p-4 p-2 rounded-xl bg-impo_Neutral_Surface !outline-impo_Primary_Primary"
          onChange={(e) => onChangeHandler(e.target.value, 'description')}
        />
      </div>
      <div className=" flex justify-center items-center">
        <CustomButton varient="outline" fontSize="Lable_Large" onClick={() => submitHandler(userInfo)} isDisable>
          ارسال
        </CustomButton>
      </div>
    </div>
  );
};

export default ContactUsForm;
