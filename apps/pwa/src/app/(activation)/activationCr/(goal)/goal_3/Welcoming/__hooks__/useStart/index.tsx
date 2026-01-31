import { useEffect } from 'react';

import { ACTIVATION_WELCOMING_PREVIEWED_NAME } from '@constants/activation.constants';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseStartTypes } from './types';

const useStart: UseStartTypes = (onStart) => {
  useEffect(() => {
    const isWelcomingPreviewed = sessionStorage.getItem(ACTIVATION_WELCOMING_PREVIEWED_NAME);

    if (!isWelcomingPreviewed) {
      onStart(StepsList.START);
    }
  }, []);
};

export default useStart;
