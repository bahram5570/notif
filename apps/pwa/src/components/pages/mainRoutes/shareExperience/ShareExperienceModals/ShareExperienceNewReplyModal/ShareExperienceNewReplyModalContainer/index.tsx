import { useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import NewReplyBtn from './NewReplyBtn';
import NewReplyText from './NewReplyText';
import NewReplyTopPart from './NewReplyTopPart';
import useSubmit from './__hooks__/useSubmit';
import useText from './__hooks__/useText';
import { ShareExperienceNewReplyModalContainerProps } from './types';

const ShareExperienceNewReplyModalContainer = ({
  data,
  avatarImage,
  username,
}: ShareExperienceNewReplyModalContainerProps) => {
  const { text, textHandler } = useText();
  const [btnTop, setBtnTop] = useState<number>();
  const { submitHandler, isLoading, toast } = useSubmit({ data, text });

  const onChangeBtnTop = (top: number | undefined) => {
    setBtnTop(top);
  };

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="نظر جدید" paddingTop={0}>
      <div className="flex flex-col min-h-[100dvh]" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
        <NewReplyTopPart text={text} name={username} avatar={avatarImage} />
        <NewReplyText text={text} textHandler={textHandler} onChangeBtnTop={onChangeBtnTop} />

        <NewReplyBtn text={text} submitHandler={submitHandler} isLoading={isLoading} btnTop={btnTop} toast={toast} />
      </div>
    </MainPageLayout>
  );
};

export default ShareExperienceNewReplyModalContainer;
