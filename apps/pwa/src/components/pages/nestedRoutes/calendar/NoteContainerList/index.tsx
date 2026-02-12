'use client';

import { useEffect, useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate, gregorianFarsiScriptDate, jalaaliScriptDate } from '@repo/core/utils/dates';

import NoteItem from '@components/pages/mainRoutes/calendar/CalendarDraggingPanel/SelectedDayNote/SelectedDayNoteList/NoteItem';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import NoteContainerListSkeleton from './NoteContainerListSkeleton';
import useGetData from './__hooks__/useGetData';

const { gDate } = currentDate();

const NoteContainerList = () => {
  const { culture } = useCulture();
  const [currentDate, setCurrentDate] = useState('');
  const { isLoading, currentNoteList } = useGetData();
  const { calendarInitailSelectedDate } = useSignDateState();

  const { pageNavigationHandler } = usePageNavigationLoading();
  const selectedDate = calendarInitailSelectedDate ? calendarInitailSelectedDate : gDate;
  const hasData = currentNoteList && currentNoteList.length > 0;

  const linkToHandler = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'CreateNewNote',
      linkTo: `/protected/note/addNote`,
    });
  };

  useEffect(() => {
    if (selectedDate) {
      const gregorianMoment = moment(selectedDate, 'YYYY-MM-DD');

      if (culture.calendarType === CalendarTypeEnum.Gregorian) {
        const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
        const gregorianFarsMonth = gregorianFarsiScriptDate(gregorianDate);

        setCurrentDate(gregorianFarsMonth);
      }

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
        const jalaaliMonth = jalaaliScriptDate(jalaaliMoment);

        setCurrentDate(jalaaliMonth);
      }
    }
  }, [culture.calendarType]);

  return (
    <MainPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="یادداشت ها"
      className="bg-impo_Neutral_Surface"
      headerClassName="bg-impo_Neutral_Surface"
    >
      {isLoading && <NoteContainerListSkeleton />}

      {!isLoading && (
        <div
          data-testid={'note-list-container'}
          style={{ paddingTop: HEADER_HEIGHT + 16 }}
          className="flex flex-col min-h-[100dvh] gap-3 pb-6 px-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-0 w-24 border-[1px] border-impo_Neutral_Background rotate-180" />

            <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground text-center">
              {currentDate}
            </CustomTypography>

            <div className="h-0 w-24 border-[1px] border-impo_Neutral_Background  rotate-180" />
          </div>

          {hasData &&
            currentNoteList.map((note) => {
              return (
                <div data-testid={'note-Item-list-container'} key={note.noteId}>
                  <NoteItem noteItem={note} isNoteListPage={true} />
                </div>
              );
            })}

          <div className="flex justify-center items-center mt-auto">
            <div
              onClick={linkToHandler}
              data-testid={'new-note-link-btn'}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-impo_Primary_Primary select-none cursor-pointer"
            >
              <CustomTypography fontSize="Lable_Large" className="text-impo_White">
                یادداشت جدید
              </CustomTypography>
            </div>
          </div>
        </div>
      )}
    </MainPageLayout>
  );
};

export default NoteContainerList;
