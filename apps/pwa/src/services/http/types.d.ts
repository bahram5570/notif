export type MethodNameTypes = 'GET' | 'DELETE' | 'POST' | 'PUT';

export type HttpContentTypeTyps = 'application/json' | 'multipart/form-data';

export type HttpTypes = {
  contentType?: HttpContentTypeTyps;
  method?: MethodNameTypes;
  payload?: object;
  url: string;
};

export type OptionsTypes = {
  method?: MethodNameTypes;
  body?: string | object;
  headers?: HeadersInit;
};

export type HttpResultTypes<T> = { data: undefined | T; error: undefined | { message: string; status: number } };
