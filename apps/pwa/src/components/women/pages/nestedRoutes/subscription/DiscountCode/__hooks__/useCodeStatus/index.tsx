import { useEffect, useState } from 'react';

import { ScriptInfoTypes, UseCodeStatusProps } from './types';

const useCodeStatus = ({ discountCodeHelper, isValidDiscountCode, approveCodeHandler }: UseCodeStatusProps) => {
  const [scriptInfo, setScriptInfo] = useState<ScriptInfoTypes>(null);
  const [hasSubmitCode, setHasSubmitCode] = useState(false);

  const hasSubmitCodeHandler = (b: boolean) => {
    setHasSubmitCode(b);
  };

  useEffect(() => {
    if (scriptInfo) {
      approveCodeHandler();
    }
  }, [scriptInfo?.script]);

  useEffect(() => {
    if (hasSubmitCode) {
      const color = isValidDiscountCode ? 'text-impo_Success_Success' : 'text-impo_Error_Error';
      const script = discountCodeHelper;
      setScriptInfo({ color, script });
    }
  }, [discountCodeHelper, isValidDiscountCode, hasSubmitCode]);

  return { hasSubmitCodeHandler, scriptInfo };
};

export default useCodeStatus;
