'use client';

import { useState } from 'react';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

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
    <WomenPageLayout rightElement="BackButton" rightElementScript="خاطره بازی" paddingTop={0}>
      <div
        className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16 }}
      >
        <div className="flex items-center w-full justify-center">
          <Dark_Typography fontSize="Title_Small" className="text-impo_Primary_Primary text-center">
            نظرت چیه؟
          </Dark_Typography>
        </div>

        <div className="flex items-center w-full justify-center">
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
            حست به این خاطره چیه؟
          </Dark_Typography>
        </div>

        <textarea
          placeholder="حست به این خاطره رو اینجا بنویس"
          className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm bg-impo_Neutral_Surface text-impo_Neutral_OnSurface  placeholder:text-impo_Surface_OutlineVariant border border-impo_Neutral_Surface outline-impo_Primary_Primary"
          rows={4}
          value={comment}
          onChange={onChangeHandler}
        />

        <footer className="mt-auto">
          <Dark_Button className="px-6 py-2 " onClick={onClick} isDisable={!comment} isLoading={isLoading}>
            <Dark_Typography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
              ثبت نظر
            </Dark_Typography>
          </Dark_Button>
        </footer>
      </div>
    </WomenPageLayout>
  );
};

export default CommentContainer;
