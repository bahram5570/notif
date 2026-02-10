'use client';

import { useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import useSubmit from './__hooks__/useSubmit';

const CommentContainer = () => {
  const [comment, setComment] = useState('');

  const { isLoading, submitHandler } = useSubmit();

  const onClick = () => {
    submitHandler({ text: comment });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="خاطره بازی" paddingTop={0}>
      <div
        className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="flex items-center w-full justify-center">
          <CustomTypography fontSize="Title_Small" className="text-impo_Primary_Primary text-center">
            نظرت چیه؟
          </CustomTypography>
        </div>

        <div className="flex items-center w-full justify-center">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
            حست به این خاطره چیه؟
          </CustomTypography>
        </div>

        <textarea
          placeholder="حست به این خاطره رو اینجا بنویس"
          className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm bg-impo_Neutral_Surface text-impo_Neutral_OnSurface  placeholder:text-impo_Surface_OutlineVariant border border-impo_Neutral_Surface outline-impo_Primary_Primary"
          rows={4}
          value={comment}
          onChange={onChangeHandler}
        />

        <footer className="mt-auto">
          <CustomButton className="px-6 py-2 " onClick={onClick} isDisable={!comment} isLoading={isLoading}>
            <CustomTypography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
              ثبت نظر
            </CustomTypography>
          </CustomButton>
        </footer>
      </div>
    </MainPageLayout>
  );
};

export default CommentContainer;
