import { UseSubmitPropsType } from '../useSubmit-1/type';

export type StreamHandlerPropsType = {
  id: string;
};

export type UseEventSourcePropsType = {
  handelLoading: (v: boolean) => void;
  errorHandler: (v: boolean) => void;
};
