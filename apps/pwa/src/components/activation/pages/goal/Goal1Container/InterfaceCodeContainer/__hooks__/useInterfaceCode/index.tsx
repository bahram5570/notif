import { useEffect, useState } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ApiInfoTypes, UseInterfaceCodeProps } from './types';

const useInterfaceCode = ({ onComplete }: UseInterfaceCodeProps) => {
  const router = useCustomRouter();
  const toast = useCustomToast();
  const [code, setCode] = useState('');
  const [apiInfo, setApiInfo] = useState<ApiInfoTypes>(null);

  const codeHandler = (v: string) => {
    setCode(v);
  };

  const successHandler = ({ valid }: { valid: boolean }) => {
    if (valid) {
      setCode('');
      router.back();
      onComplete(code);
      toast.notifyToastHandler({ message: 'کد معرف با موفقیت ثبت شد', type: 'success' });
    } else {
      toast.notifyToastHandler({ message: 'کد معرف نامعتبر است', type: 'error' });
    }

    setApiInfo(null);
  };

  const errorHandler = () => {
    setApiInfo(null);
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    onError: errorHandler,
    api: apiInfo?.api || '',
    onSuccess: successHandler,
    queryKey: [`${apiInfo?.queryKey}`],
  });

  useEffect(() => {
    if (apiInfo) {
      callApi();
    }
  }, [apiInfo]);

  const submitHandler = () => {
    if (code) {
      setApiInfo({ api: `woman/checkinterface/${code}`, queryKey: `${Date.now()}` });
    }
  };

  return { code, codeHandler, isLoading, submitHandler };
};

export default useInterfaceCode;
