import { UsePwaApiProps } from './types';
import useHelperMutate from './useHelperMutate';
import useHelperQuery from './useHelperQuery';

export const usePwaApi = <T,>(props: UsePwaApiProps<T>) => {
  if (props.method === 'GET') {
    return useHelperQuery<T>(props);
  } else {
    return useHelperMutate<T>(props);
  }
};
