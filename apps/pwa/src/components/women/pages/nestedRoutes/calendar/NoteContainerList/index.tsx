'use client';

import { useEffect, useState } from 'react';

import { currentDate, gregorianFarsiScriptDate, jalaaliScriptDate } from '@utils/dates';

import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import NoteItem from '@components/women/pages/mainRoutes/calendar/CalendarDraggingPanel/SelectedDayNote/SelectedDayNoteList/NoteItem';
import { CalendarTypeEnum } from '@constants/date.constants';
import useSignDateState from '@hooks/__sign__/useSignDateState';
import useCulture from '@hooks/useCulture';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

import NoteContainerListSkeleton from './NoteContainerListSkeleton';
import useGetData from './__hooks__/useGetData';

const { gDate } = currentDate();

const NoteContainerList = () => {
  const { colors } = useTheme();
  const { culture } = useCulture();
  const [currentDate, setCurrentDate] = useState('');
  const { isLoading, currentNoteList } = useGetData();
  const { calendarInitailSelectedDate } = useSignDateState();

  const { pageNavigationHandler } = usePageNavigationLoading();
  const selectedDate = calendarInitailSelectedDate ? calendarInitailSelectedDate : gDate;
  const hasData = currentNoteList && currentNoteList.length > 0;

  const linkTo = () => {
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
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript="یادداشت ها"
      backgroundColor={colors.Grey_50}
      headerBackgroundColor={colors.Grey_50}
      paddingTop={0}
    >
      {isLoading && <NoteContainerListSkeleton />}

      {!isLoading && (
        <div
          className="flex flex-col min-h-[100dvh] gap-3 pb-6 px-4"
          style={{ paddingTop: HEADER_HEIGHT + 16 }}
          data-testid={'note-list-container'}
        >
          <div className="flex items-center justify-center gap-3">
            <div
              style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
              className="h-0 w-24"
            />

            <Typography scale="Body" size="Large" color="Neutral_OnBackground" textAlign="center">
              {currentDate}
            </Typography>

            <div
              style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
              className="h-0 w-24"
            />
          </div>

          {hasData &&
            currentNoteList.map((note) => {
              return (
                <div data-testid={'note-Item-list-container'} key={note.noteId}>
                  <NoteItem noteItem={note} hasNoteListPage />
                </div>
              );
            })}

          <div className="flex justify-center items-center mt-auto">
            <div
              onClick={linkTo}
              data-testid={'new-note-link-btn'}
              style={{ background: colors.PrimaryWoman_Primary }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-[1px] select-none cursor-pointer w-full"
            >
              <Typography scale="Lable" size="Large" color="White">
                یادداشت جدید
              </Typography>
            </div>
          </div>
        </div>
      )}
    </WomenPageLayout>
  );
};

export default NoteContainerList;
