'use client';

import { useEffect, useRef, useState } from 'react';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperienceNewContinueBtn from './ShareExperienceNewContinueBtn';
import ShareExperienceNewFile from './ShareExperienceNewFile';
import ShareExperienceNewText from './ShareExperienceNewText';
import ShareExperienceNewTopPart from './ShareExperienceNewTopPart';
import ShareExperienceNewTopics from './ShareExperienceNewTopics';
import useConfigNewExperience from './__hooks__/useConfig';
import useImage from './__hooks__/useImage';
import useSubmit from './__hooks__/useSubmit';
import useText from './__hooks__/useText';
import useTopics from './__hooks__/useTopics';
import { ShareExperienceNewExerciseModalContainerProps } from './types';

const ShareExperienceNewExerciseModalContainer = ({
  onSuccessNewHandler,
  avatarImage,
  username,
  queryParam,
}: ShareExperienceNewExerciseModalContainerProps) => {
  const { config, configLoading } = useConfigNewExperience();
  const { isLoading, topicsData, topicId, topicIdHandler } = useTopics();
  const { text, textHandler } = useText();
  const fileProps = useImage();
  const [btnTop, setBtnTop] = useState<number>(0);
  const conainerRef = useRef<HTMLDivElement | null>(null);
  useOverflowHandler(queryParam !== null);

  const { submitHandler, isSubmitLoading, toastMessage } = useSubmit({
    image: fileProps.image,
    topicId: topicId || '',
    onSuccessNewHandler,
    text,
  });

  useEffect(() => {
    const el = conainerRef.current;
    if (el) {
      if (window.visualViewport) {
        window.visualViewport?.addEventListener('resize', () => {
          const viewportHeight = window.visualViewport!.height;
          const windowHeight = window.innerHeight;

          const keyboardHeight = windowHeight - viewportHeight;
          setBtnTop(keyboardHeight);
        });
      }
    }
  }, [text]);

  const onChangeBtnTop = () => {
    setBtnTop(0);
  };

  return (
    <>
      <MainPageLayout rightElement="BackButton" rightElementScript="تجربه جدید" paddingTop={0}>
        {configLoading && !config && <Dark_Spinner />}
        {!configLoading && config && (
          <div className="flex flex-col h-[100dvh] overflow-y-auto" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            <ShareExperienceNewTopPart avatarImage={avatarImage} text={text} username={username} />

            <div className="w-full pr-[48px]  flex flex-col gap-2 -translate-y-2" ref={conainerRef}>
              <ShareExperienceNewText textHandler={textHandler} text={text} placeholder={config.placeholder} />

              <ShareExperienceNewFile
                imageFile={fileProps.imageFile}
                fileDataHandler={fileProps.fileDataHandler}
                removeFileHandler={fileProps.removeFileHandler}
                uploadImageLoading={fileProps.uploadImageLoading}
                onChangeBtnTop={onChangeBtnTop}
              />
            </div>

            <ShareExperienceNewContinueBtn
              text={text}
              btnTop={btnTop}
              sendEnable={config.sendEnable}
              toast={config.toast || toastMessage}
            />
          </div>
        )}
      </MainPageLayout>

      <ShareExperienceNewTopics
        topicId={topicId}
        isLoading={isLoading}
        topicsData={topicsData}
        submitHandler={submitHandler}
        topicIdHandler={topicIdHandler}
        isSubmitLoading={isSubmitLoading}
      />
    </>
  );
};

export default ShareExperienceNewExerciseModalContainer;
