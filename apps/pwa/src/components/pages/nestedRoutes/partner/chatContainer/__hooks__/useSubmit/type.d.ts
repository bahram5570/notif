import { ProgressPropsType } from '../useGetData/type';

export type UseSubmitPropsType = { resetChild: () => void };

export type SubmitResponsePropsType = {
  id: string;
  progress: ProgressPropsType;
};
