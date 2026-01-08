import { CalendarGuideInfoTypes } from '../__hooks__/useCalendarGetData/types';

export interface CalendarGuidesProps {
  calendarGuideInfo: CalendarGuideInfoTypes | null;
}

export type GuideListTypes = { backgroundColor: string; text: string; borderColor?: string }[];
