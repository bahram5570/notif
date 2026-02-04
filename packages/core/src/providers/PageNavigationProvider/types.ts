export type RouteSequenceListTypes = string[] | null;

export type SequenceHandlerTypes = (v: string[]) => void;

export type PageNavigationHandlerTypes = (v: {
  showProgressBar: boolean;
  linkTo?: string | -1;
  id: string | number;
}) => void;

export type LoadingStatesTypes = false | string | number;

export type PageNavigationContextTypes = {
  sequenceHandler: SequenceHandlerTypes;
  pageNavigationHandler: PageNavigationHandlerTypes;
  pageNavigationLoading: LoadingStatesTypes;
};
