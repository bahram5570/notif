import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useChangeType = () => {
  const { isLoading, callApi } = usePwaApi({
    method: 'POST',
    api: 'partner/type',
  });

  const changeTypeHandler = (type: number) => {
    const payload = {
      distanceType: type,
    };

    callApi(payload);
  };

  return { isLoading, changeTypeHandler };
};

export default useChangeType;
