import { useState } from 'react';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import AddToHomeScreenBackground from './AddToHomeScreenBackground';
import AddToHomeScreenBrowserContent from './AddToHomeScreenBrowserContent';
import AddToHomeScreenMainContent from './AddToHomeScreenMainContent';
import { AddToHomeScreenContentsProps } from './types';

const AddToHomeScreenContents = ({ browserInfo, operatingSystem }: AddToHomeScreenContentsProps) => {
  const [step, setStep] = useState(0);

  return (
    <div className="relative w-full min-h-[100dvh] mx-auto overflow-x-hidden" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <AddToHomeScreenBackground />

      {step === 0 && <AddToHomeScreenMainContent operatingSystem={operatingSystem} onClick={() => setStep(1)} />}
      {step === 1 && <AddToHomeScreenBrowserContent operatingSystem={operatingSystem} browserInfo={browserInfo} />}
    </div>
  );
};

export default AddToHomeScreenContents;
