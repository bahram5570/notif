export type MethodNameTypes = 'GET' | 'DELETE' | 'POST' | 'PUT';

export type PwaHttpContentTypeTypes = 'application/json' | 'multipart/form-data';

export type PwaHttpTypes = {
  contentType?: PwaHttpContentTypeTypes;
  method?: MethodNameTypes;
  payload?: object;
  url: string;
};

export type PwaHttpOptionsTypes = {
  method?: MethodNameTypes;
  body?: string | object;
  headers?: HeadersInit;
};

export type PwaHttpResultTypes<T> = { data: undefined | T; error: undefined | { message: string; status: number } };
