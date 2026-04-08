'use client';

import { useRef } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { useSystem } from '../../../hooks/useSystem';
import DeleteNoteBtn from './DeleteNoteBtn';
import { NoteContainerSkeleton } from './NoteContainerSkeleton';
import { NoteInputGenerator } from './NoteInputGenerator';
import { NoteModal } from './NoteModal';
import { useGetData } from './__hooks__/useGetData';
import { useSubmit } from './__hooks__/useSubmit';

export const NoteContainer = () => {
  const { callEvent } = useAnalytics();
  const { appName } = useSystem();

  const textareaConainerRef = useRef<HTMLDivElement | null>(null);
  const { noteValue, onChangeHandler, isLoading: getDataLoading } = useGetData();
  const { isLoading, submitHandler } = useSubmit({ noteId: noteValue.noteId });

  const isEditMode = noteValue.noteId ? true : false;

  const onClick = () => {
    isEditMode ? callEvent('NoteEdit') : callEvent('NoteAdd');
    submitHandler(noteValue);
  };

  return (
    <>
      {getDataLoading && <NoteContainerSkeleton />}

      {!getDataLoading && (
        <MainPageLayout
          paddingTop={0}
          rightElement="BackButton"
          rightElementScript="ثبت یادداشت"
          className="bg-impo_Neutral_Surface"
          headerClassName="bg-impo_Neutral_Surface"
        >
          <div className="flex flex-col min-h-[100dvh] gap-6 pb-6 px-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            <div className="flex flex-col justify-center items-center p-4 gap-2">
              <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                میخوای به کارهات اولویت بدی؟
              </CustomTypography>

              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
                کارهات رو اینجا بنویس و در صورت لزوم میتونی یادآور هم براش تنظیم کنی
              </CustomTypography>
            </div>

            <NoteInputGenerator noteValue={noteValue} onChangeHandler={onChangeHandler} ref={textareaConainerRef} />

            {isEditMode && <DeleteNoteBtn />}

            <div
              className="fixed h-fit right-0 left-0 bottom-0 z-40 py-3 px-2 mx-auto"
              style={{ maxWidth: MAX_SCREEN_WIDTH }}
            >
              <CustomButton
                isLoading={isLoading}
                className={appName && '!bg-impo_PrimaryMan_PrimaryMan !border-none'}
                isDisable={!noteValue.title}
                fontSize="Lable_Large"
                onClick={onClick}
              >
                {isEditMode ? 'ویرایش یادداشت' : 'ثبت یادداشت'}
              </CustomButton>
            </div>
          </div>

          <NoteModal noteValue={noteValue} onChangeHandler={onChangeHandler} />
        </MainPageLayout>
      )}
    </>
  );
};
