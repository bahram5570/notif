import { useState } from 'react';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';

import { ContinueBtnNextActivationOnContinueTypes, NextActivationHandlerTypes } from './types';

const useContinueBtnNextActivation = (onContinue: ContinueBtnNextActivationOnContinueTypes) => {
  const router = useCustomRouter();
  const toast = useCustomToast();
  const [resetKey, setResetKey] = useState(Math.random().toString());

  const nextActivationHandler: NextActivationHandlerTypes = (v) => {
    if (v.invalidMessage) {
      toast.notifyToastHandler({ message: v.invalidMessage, type: 'error' });
      setResetKey(Math.random().toString());
      return;
    }

    if (onContinue) {
      onContinue();
    }

    if (typeof v.nextActivation === 'string' && v.nextActivation !== '') {
      router.push(v.nextActivation);
    } else {
      if (v.onRegister) {
        v.onRegister();
      }
    }
  };

  return { nextActivationHandler, resetKey };
};

export default useContinueBtnNextActivation;
