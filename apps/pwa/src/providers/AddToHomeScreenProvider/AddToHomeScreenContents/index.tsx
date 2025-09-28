import { useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AddToHomeScreenBrowserContent from './AddToHomeScreenBrowserContent';
import AddToHomeScreenMainContent from './AddToHomeScreenMainContent';
import { AddToHomeScreenContentsProps } from './types';

const AddToHomeScreenContents = ({ browserInfo, operatingSystem }: AddToHomeScreenContentsProps) => {
  const [step, setStep] = useState(0);

  return (
    <div className="relative w-full min-h-[100dvh] mx-auto overflow-x-hidden" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <div className="absolute top-0 left-0 right-0 flex justify-center items-start z-0 pointer-events-none">
        <CustomImage
          alt="hollow"
          src="/assets/images/questionsHollow.png"
          className={`w-full h-auto scale-[1.6] -translate-y-[20%]`}
        />
      </div>

      {step === 0 && <AddToHomeScreenMainContent operatingSystem={operatingSystem} onClick={() => setStep(1)} />}
      {step === 1 && <AddToHomeScreenBrowserContent operatingSystem={operatingSystem} browserInfo={browserInfo} />}
    </div>
  );
};

export default AddToHomeScreenContents;
