import { useEffect } from 'react';

import {
  ACTIVATION_HEADING_ICON_ID,
  ACTIVATION_HEADING_SCRIPTS_ID,
  ACTIVATION_INPUT_MODULE_ID,
} from '@components/activation/ActivationHeading/constants';
import { ACTIVATION_WELCOMING_PREVIEWED_NAME } from '@constants/activation.constants';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseStartTypes } from './types';

const useStart: UseStartTypes = (onStart) => {
  useEffect(() => {
    const isWelcomingPreviewed =
      typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(ACTIVATION_WELCOMING_PREVIEWED_NAME);

    if (!isWelcomingPreviewed) {
      onStart(StepsList.START);

      const iconElement = document.getElementById(ACTIVATION_HEADING_ICON_ID);
      if (iconElement) {
        iconElement.style.transform = 'translateY(160px) scale(1.3)';
        iconElement.style.transitionDuration = '0s';
        iconElement.style.opacity = '0';
      }

      const scriptsElements = document.querySelectorAll(
        `[id=${ACTIVATION_HEADING_SCRIPTS_ID}]`,
      ) as NodeListOf<HTMLDivElement>;

      if (scriptsElements) {
        scriptsElements.forEach((el) => {
          el.style.transform = 'translateY(220px) scale(0)';
          el.style.transitionDuration = '0s';
        });
      }

      const inputElement = document.getElementById(ACTIVATION_INPUT_MODULE_ID);
      if (inputElement) {
        inputElement.style.transform = 'scale(0)';
      }
    }
  }, []);
};

export default useStart;
