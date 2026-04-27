export type IncreaseZIndexHandlerType = (modalKey: string, value?: string) => void;
export type GetZindexHandlerType = (modalKey: string, value?: string) => number;

export type OverlayIndexContextType = {
  increaseZIndex: IncreaseZIndexHandlerType;
  getZIndex: GetZindexHandlerType;
};
