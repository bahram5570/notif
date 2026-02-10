import { UseActionTypesProps } from '../types';

export interface UseActionTypeInternalRoutTypes extends Pick<
  UseActionTypesProps,
  'onCallBack' | 'internalRoutesConverter'
> {
  onActionComplete: () => void;
}

export type CallInternalRoutTypes = (props: { actionInternal: string }) => void;
