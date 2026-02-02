'use client';

import { useState } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@utils/numbers';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import useProfileData from '@hooks/__profile__/useProfileData';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import FileInput from './FileInput';
import { ValuesHandlerTypes } from './FileInput/type';
import SupportChatModal from './SupportChatModal';
import SupportChatSkeleton from './SupportChatSkeleton';
import useSubmit from './__hooks__/useSubmit';

const ContactSupportPage = () => {
  const { operatingSystem } = useOperatingSystem();
  const { isLoading, profileData } = useProfileData();
  const [values, setValues] = useState({ text: '', fileName: '' });
  const { isLoading: submitLoading, submitHandler } = useSubmit();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  const valuesHandler: ValuesHandlerTypes = (v) => {
    setValues({ ...values, [v.name]: v.value });
  };

  return (
    <>
      <MainPageLayout
        paddingTop={0}
        rightElement="BackButton"
        className="bg-impo_Neutral_Surface"
        rightElementScript="ارتباط با پشتیبانی"
      >
        {isLoading && <SupportChatSkeleton />}

        {!isLoading && (
          <div className="flex flex-col items-end gap-3 min-h-[100dvh] p-4" style={{ paddingTop: HEADER_HEIGHT + 20 }}>
            <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
              ارتباط با پشتیبانی
            </CustomTypography>

            {profileData && (
              <>
                <div className="w-full p-4 rounded-2xl bg-impo_Neutral_Background">
                  <textarea
                    rows={4}
                    value={toPersianNumbers(values.text)}
                    style={{ ...typographyFontStyles, direction: 'rtl' }}
                    onChange={(e) => valuesHandler({ name: 'text', value: e.target.value })}
                    className="w-full max-h-[100px] rounded-xl text-right p-2 resize-none outline-none bg-impo_Neutral_Background text-impo_Neutral_OnBackground placeholder:text-impo_Surface_OutlineVariant"
                    placeholder={`${profileData?.name} ، سوال یا مشکلت رو اینجا بنویس تا پشتیبان‌های ایمپودر اولین فرصت بهت پاسخ بدن.`}
                  />

                  <FileInput fileName={values.fileName} valuesHandler={valuesHandler} />
                </div>

                <CustomButton
                  className="mt-auto"
                  isDisable={!values.text}
                  isLoading={submitLoading}
                  fontSize="Lable_Large"
                  onClick={() => submitHandler({ fileName: values.fileName, text: values.text })}
                >
                  ثبت نظر
                </CustomButton>
              </>
            )}
          </div>
        )}

        <SupportChatModal valuesHandler={valuesHandler} />
      </MainPageLayout>
    </>
  );
};

export default ContactSupportPage;
