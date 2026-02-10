import { UseActionTypesProps } from '../types';

export interface UseActionTypeApiCallTypes extends Pick<UseActionTypesProps, 'onCallBack'> {
  onActionComplete: () => void;
}
