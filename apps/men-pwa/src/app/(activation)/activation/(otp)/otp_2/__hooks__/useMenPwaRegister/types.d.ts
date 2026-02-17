import { FetchedUserTypes } from '@components/activation/pages/types';

export interface UseMenPwaRegisterTypes {
  completeHander: () => void;
  loginHandler: (v: FetchedUserTypes) => void;
}
