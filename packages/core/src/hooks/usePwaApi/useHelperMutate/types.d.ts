import { DeleteTypes, PostTypes, PutTypes, UsePwaApiCommonObjectsTypes } from '../types';

type MethodsTypes = PutTypes | PostTypes | DeleteTypes;
export type UseHelperMutateProps<T> = MethodsTypes & UsePwaApiCommonObjectsTypes<T>;
