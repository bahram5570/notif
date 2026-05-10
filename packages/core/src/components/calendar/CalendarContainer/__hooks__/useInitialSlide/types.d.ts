import { CalendarContainerProps, MonthsListTypes } from '../../type';

type Types = Pick<CalendarContainerProps, 'selectedDate' | 'selectedDateHandler'>;

export interface UseInitialSlideProps extends Types {
  monthsList: MonthsListTypes;
}

export type ResetKeyHandlerTypes = (date: string) => void;
