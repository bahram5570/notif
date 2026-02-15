import { ActionTypes } from './widgetCommon';

export type ActionHandlerTypes = (action: ActionTypes) => void;

export type WidgetActionsContextTypes = {
  actionHandler: ActionHandlerTypes;
  onMountActionsHandler: (v: ActionTypes[]) => void;
};

export type InternalRoutesConverterTypes = (serverLink: string) => Promise<string>;
export type OnCallBackTypes = (name: string) => void;

export interface WidgetActionsProviderTypes {
  children: React.ReactNode;
  onCallBack?: OnCallBackTypes;
  PopUpEditCycle?: React.ElementType;
  internalRoutesConverter: InternalRoutesConverterTypes;
}

export type ActionListHandlerTypes = (v: ActionTypes[]) => void;
