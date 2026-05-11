import { AccessOptionType } from './__hooks__/useShowBlockToast/type';

export type IncreaseZIndexHandlerType = (modalKey: string, value?: string) => void;
export type GetZindexHandlerType = (modalKey: string, value?: string) => number;

export type ShareExperienceContextType = {
  increaseZIndex: IncreaseZIndexHandlerType;
  getZIndex: GetZindexHandlerType;
  accessOptionHandler: (v: AccessOptionType) => void;
};

export type ShareExperienceProviderProps = {
  children: React.ReactNode;
};
