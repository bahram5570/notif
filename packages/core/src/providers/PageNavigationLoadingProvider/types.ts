export type PageNavigationHandlerTypes = (v: {
  showProgressBar: boolean;
  linkTo?: string | -1;
  id: string | number;
}) => void;

export type LoadingStatesTypes = false | string | number;

export type PageNavigationLoadingContextTypes = {
  pageNavigationHandler: PageNavigationHandlerTypes;
  pageNavigationLoading: LoadingStatesTypes;
};
