import { ActionTypes } from '../WidgetActionsProvider';

export interface SignDateStateProviderTypes {
  children: React.ReactNode;
  toastRoutes: string[];
  dateRoutes: string[];
}

export type ChangeCurrentDateTypes = (date: string) => void;

export type DateInSignContextTypes = {
  calendarInitailSelectedDate: string | null;
  changeCurrentDate: ChangeCurrentDateTypes;
  changeSignsStaus: () => void;
  hasSignsChanged: boolean;
};

export type ActionListHandlerTypes = (v: ActionTypes[]) => void;
