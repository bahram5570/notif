import { INITIAL_VALUE_ZINDEXS } from './constant';

export type ModalZIndexesType = typeof INITIAL_VALUE_ZINDEXS;

type ModalKeys = keyof typeof INITIAL_VALUE_ZINDEXS;

export type IncreaseZIndexHandlerType = (modalKey: string, value?: string) => void;
export type GetZindexHandlerType = (modalKey: string, value?: string) => number;

export type OverlayIndexContextType = {
  increaseZIndex: IncreaseZIndexHandlerType;
  getZIndex: GetZindexHandlerType;
};
