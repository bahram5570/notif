import { MonthsListTypes } from '../../type';

export interface UseCalendarHeadingProps {
  monthsList: MonthsListTypes;
  initialSlide: number | null;
  resetKey: string;
}

export type NavigateHandlerTypes = (nextSlide: boolean) => void;
