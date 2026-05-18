'use client';

import { useEffect, useRef, useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { Loading } from '@repo/core/components/ShareExperience';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import ShareExperienceNewContinueBtn from './ShareExperienceNewContinueBtn';
import ShareExperienceNewFile from './ShareExperienceNewFile';
import UploadFileModal from './ShareExperienceNewFile/UploadFileModal';
import ShareExperienceNewText from './ShareExperienceNewText';
import ShareExperienceNewTopPart from './ShareExperienceNewTopPart';
import ShareExperienceNewTopics from './ShareExperienceNewTopics';
import ShareExperienceRules from './ShareExperienceRules';
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
  associationId,
}: ShareExperienceNewExerciseModalContainerProps) => {
  const { topicsData, topicId, topicIdHandler } = useTopics();
  const { config, configLoading } = useConfigNewExperience();
  const conainerRef = useRef<HTMLDivElement | null>(null);
  const [btnTop, setBtnTop] = useState<number>(0);
  const { text, textHandler } = useText();
  useOverflowHandler(queryParam !== null);
  const fileProps = useImage();

  const { submitHandler, isSubmitLoading, toastMessage } = useSubmit({
    image: fileProps.image,
    topicId: topicId || '',
    onSuccessNewHandler,
    associationId,
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
        <div className="flex flex-col h-[100dvh] overflow-y-auto" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          {configLoading && !config && <Loading />}

          {!configLoading && config && (
            <>
              {config.showRegualtion && <ShareExperienceRules textRegualtion={config.textRegualtion} />}
              {!config.showRegualtion && (
                <>
                  <ShareExperienceNewTopPart avatarImage={avatarImage} text={text} username={username} />

                  <div className="w-full pr-[48px]  flex flex-col gap-2 -translate-y-2" ref={conainerRef}>
                    <ShareExperienceNewText textHandler={textHandler} text={text} placeholder={config.placeholder} />

                    <ShareExperienceNewFile
                      imageFile={fileProps.image}
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
                    associationId={associationId}
                    isSubmitLoading={isSubmitLoading}
                    submitHandler={submitHandler}
                  />
                </>
              )}
            </>
          )}
        </div>
      </MainPageLayout>

      <UploadFileModal fileDataHandler={fileProps.fileDataHandler} uploadImageLoading={fileProps.uploadImageLoading} />

      <ShareExperienceNewTopics
        topicId={topicId}
        topicsData={topicsData}
        submitHandler={submitHandler}
        topicIdHandler={topicIdHandler}
        isSubmitLoading={isSubmitLoading}
      />
    </>
  );
};

export default ShareExperienceNewExerciseModalContainer;
