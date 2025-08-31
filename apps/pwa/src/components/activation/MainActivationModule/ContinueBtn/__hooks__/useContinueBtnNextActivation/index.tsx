import { useState } from 'react';

import useAnalytics from '@hooks/useAnalytics';
import useCustomToast from '@hooks/useCustomToast';
import useSectionSaver from '@providers/__activation__/ActivationProvider/__hooks__/useSectionSaver';
import { useRouter } from 'next/navigation';

import { NextActivationHandlerTypes } from './types';

const useContinueBtnNextActivation = () => {
  const router = useRouter();
  const { callEvent } = useAnalytics();
  const { onToast } = useCustomToast();
  const { sectionSaverHandler } = useSectionSaver();
  const [resetKey, setResetKey] = useState(Math.random().toString());

  const nextActivationHandler: NextActivationHandlerTypes = (v) => {
    const pathList = location.pathname.split('/');

    if (v.invalidMessage) {
      onToast({ message: v.invalidMessage, type: 'error' });
      setResetKey(Math.random().toString());
      return;
    }

    if (typeof v.nextActivation === 'string' && v.nextActivation !== '') {
      sectionSaverHandler(v.nextActivation);
      router.push(v.nextActivation);
      callEvent(`${pathList[1]} ${pathList[2]}`);
    } else {
      if (v.onRegister) {
        v.onRegister();
        callEvent(`${pathList[1]} ${pathList[2]} COMPLETE_REGISTER`);
      }
    }
  };

  return { nextActivationHandler, resetKey };
};

export default useContinueBtnNextActivation;
