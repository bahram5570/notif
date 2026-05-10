'use client';

import { useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTextareaInput } from '@repo/core/components/ui/CustomTextareaInput';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import useSubmit from './__hooks__/useSubmit';

const MemoryCommentPage = () => {
  const [comment, setComment] = useState('');

  const { isLoading, submitHandler } = useSubmit();

  const onClick = () => {
    submitHandler({ text: comment });
  };

  const onChangeHandler = (v: string) => {
    setComment(v);
  };

  return (
    <MainPageLayout leftElement1="Profile" rightElement="BackButton" rightElementScript="خاطره بازی" paddingTop={0}>
      <div
        className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="flex items-center w-full justify-center">
          <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_PrimaryMan text-center">
            نظرت چیه؟
          </CustomTypography>
        </div>

        <div className="flex items-center w-full justify-center">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
            حست به این خاطره چیه؟
          </CustomTypography>
        </div>

        <CustomTextareaInput
          placeholder="حست به این خاطره رو اینجا بنویس"
          rows={4}
          value={comment}
          onChangeHandler={onChangeHandler}
        />

        <footer className="mt-auto">
          <CustomButton
            className="px-6 py-2 !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
            onClick={onClick}
            isDisable={!comment}
            isLoading={isLoading}
          >
            <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
              ثبت نظر
            </CustomTypography>
          </CustomButton>
        </footer>
      </div>
    </MainPageLayout>
  );
};

export default MemoryCommentPage;
