import { GetTypes, UsePwaApiCommonObjectsTypes } from '../types';

export type UseHelperQueryProps<T> = GetTypes<T> & UsePwaApiCommonObjectsTypes<T>;

export type InitialEnabledValueTypes = (fetchOnMount?: boolean) => boolean;
