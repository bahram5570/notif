'use client';

import { useEffect, useRef, useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import OverlayBar from '@components/ui/OverlayBar';
import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import DeleteNoteBtn from './DeleteNoteBtn';
import NoteContainerSkeleton from './NoteContainerSkeleton';
import NoteInputGenerator from './NoteInputGenerator';
import NoteModal from './NoteModal';
import useGetData from './__hooks__/useGetData';
import useSubmit from './__hooks__/useSubmit';

const NoteContainer = () => {
  const { callEvent } = useAnalytics();
  const [btnTop, setBtnTop] = useState<number>(0);
  const textareaConainerRef = useRef<HTMLDivElement | null>(null);
  const { noteValue, onChangeHandler, isLoading: getDataLoading } = useGetData();
  const { isLoading, submitHandler } = useSubmit({ noteId: noteValue.noteId });

  const isEditMode = noteValue.noteId ? true : false;

  const onClick = () => {
    isEditMode ? callEvent('NoteEdit') : callEvent('NoteAdd');
    submitHandler(noteValue);
  };

  useEffect(() => {
    const el = textareaConainerRef.current;

    if (el) {
      const elTop = el.getBoundingClientRect().top;
      const elHeight = el.offsetHeight;
      const elPaddingTop = 20;

      setBtnTop(elTop + elHeight + elPaddingTop);
    }
  }, [getDataLoading]);

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

            <OverlayBar btnTop={btnTop} className="py-3 px-2 mx-auto" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
              <CustomButton isLoading={isLoading} isDisable={!noteValue.title} fontSize="Lable_Large" onClick={onClick}>
                {isEditMode ? 'ویرایش یادداشت' : 'ثبت یادداشت'}
              </CustomButton>
            </OverlayBar>
          </div>

          <NoteModal noteValue={noteValue} onChangeHandler={onChangeHandler} />
        </MainPageLayout>
      )}
    </>
  );
};

export default NoteContainer;
