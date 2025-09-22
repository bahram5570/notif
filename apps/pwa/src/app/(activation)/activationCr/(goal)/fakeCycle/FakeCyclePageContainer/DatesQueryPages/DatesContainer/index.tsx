import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationBtn from '@components/activation/ActivationBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { DatesContainerProps } from './types';

const DatesContainer = ({ children, description, subtitle, title, continueHandler, showBtn }: DatesContainerProps) => {
  return (
    <div className="relative flex flex-col overflow-hidden h-[100dvh]">
      <div className="relative flex flex-col min-h-[100dvh] overflow-x-hidden overflow-y-auto">
        <ActivationBackBtn />
        <ActivationHeading scripts={{ description, subtitle, title }} />
        <>{children}</>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 pb-6 px-4 mx-auto w-full z-10"
        style={{ maxWidth: MAX_SCREEN_WIDTH, pointerEvents: showBtn ? 'auto' : 'none' }}
      >
        <ActivationBtn onClick={continueHandler} navigationLoadingId="DatesContainer" showBtn={showBtn}>
          ادامه
        </ActivationBtn>
      </div>
    </div>
  );
};

export default DatesContainer;
