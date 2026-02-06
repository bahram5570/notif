import { PwaHttpContentTypeTypes } from '../../utils/pwaHttp/types';

export type GetTypes<T> = {
  method: 'GET';
  initialData?: T;
  queryKey: [string];
  cacheTime?: number;
  fetchOnMount?: boolean;
};
export type DeleteTypes = {
  method: 'DELETE';
};
export type PostTypes = {
  method: 'POST';
  contentType?: PwaHttpContentTypeTypes;
};
export type PutTypes = {
  method: 'PUT';
  contentType?: PwaHttpContentTypeTypes;
};
type MethodTypes<T> = GetTypes<T> | PostTypes | PutTypes | DeleteTypes;

export type UsePwaApiCommonObjectsTypes<T> = {
  onSuccess?: (v: T) => void;
  onError?: () => void;
  api: string;
};

export type UsePwaApiProps<T> = MethodTypes<T> & UsePwaApiCommonObjectsTypes<T>;
