import CrossIcon from '@assets/shared/icons/plus.svg';

import { useCustomRouter } from '../../../../../hooks/useCustomRouter';
import PopupTwoStepsContainerProgressBar from './PopupTwoStepsContainerProgressBar';
import { PopupTwoStepsContainerProps } from './types';

const PopupTwoStepsContainer = ({ children, currentStep }: PopupTwoStepsContainerProps) => {
  const router = useCustomRouter();

  return (
    <div className="relative w-full h-full flex flex-col items-center bg-impo_Neutral_Surface">
      <div className="flex w-full px-8 py-6">
        <CrossIcon
          onClick={() => router.back()}
          className="w-6 h-6 rotate-45 cursor-pointer stroke-impo_Surface_OnSurfaceVariant"
        />
      </div>

      {currentStep !== null && <PopupTwoStepsContainerProgressBar currentStep={currentStep} />}

      <>{children}</>
    </div>
  );
};

export default PopupTwoStepsContainer;
