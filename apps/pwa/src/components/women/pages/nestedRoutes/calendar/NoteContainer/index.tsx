'use client';

import { useEffect, useRef, useState } from 'react';

import Button from '@components/ui/Button';
import OverlayBar from '@components/ui/OverlayBar';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useAnalytics from '@hooks/useAnalytics';

import DeleteNoteBtn from './DeleteNoteBtn';
import NoteContainerSkeleton from './NoteContainerSkeleton';
import NoteInputGenerator from './NoteInputGenerator';
import NoteModal from './NoteModal';
import useGetData from './__hooks__/useGetData';
import useSubmit from './__hooks__/useSubmit';

const NoteContainer = () => {
  const { callEvent } = useAnalytics();
  const { noteValue, onChangeHandler, isLoading: getDataLoading } = useGetData();
  const { isLoading, submitHandler } = useSubmit({ noteId: noteValue.noteId });
  const [btnTop, setBtnTop] = useState<number>(0);
  const textareaConainerRef = useRef<HTMLDivElement | null>(null);

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
        <WomenPageLayout
          paddingTop={0}
          rightElement="BackButton"
          className="bg-impo_Grey_50"
          headerClassName="bg-impo_Grey_50"
          rightElementScript="ثبت یادداشت"
        >
          <div className="flex flex-col min-h-[100dvh] gap-6 pb-6 px-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            <div className="flex flex-col justify-center items-center p-4 gap-2">
              <Typography scale="Title" size="Small">
                میخوای به کارهات اولویت بدی؟
              </Typography>

              <Typography scale="Body" size="Medium" textAlign="center">
                کارهات رو اینجا بنویس و در صورت لزوم میتونی یادآور هم براش تنظیم کنی
              </Typography>
            </div>

            <NoteInputGenerator noteValue={noteValue} onChangeHandler={onChangeHandler} ref={textareaConainerRef} />

            {isEditMode && <DeleteNoteBtn />}

            <OverlayBar btnTop={btnTop} className="py-3 px-2 mx-auto" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
              <Button
                size="medium"
                variant="fill"
                color="primary"
                isLoading={isLoading}
                isDisable={!noteValue.title}
                className="w-full"
                onClick={onClick}
              >
                {isEditMode ? 'ویرایش یادداشت' : 'ثبت یادداشت'}
              </Button>
            </OverlayBar>
          </div>

          <NoteModal noteValue={noteValue} onChangeHandler={onChangeHandler} />
        </WomenPageLayout>
      )}
    </>
  );
};

export default NoteContainer;
