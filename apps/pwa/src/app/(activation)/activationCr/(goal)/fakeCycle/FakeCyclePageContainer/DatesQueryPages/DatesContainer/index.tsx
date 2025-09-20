import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationBtn from '@components/activation/ActivationBtn';
import ActivationHeading from '@components/activation/ActivationHeading';

import { DatesContainerProps } from './types';

const DatesContainer = ({ children, description, subtitle, title, continueHandler, showBtn }: DatesContainerProps) => {
  return (
    <div className="relative flex flex-col overflow-x-hidden h-[100dvh]">
      <ActivationBackBtn />
      <ActivationHeading scripts={{ description, subtitle, title }} />
      <>{children}</>

      <div className="mt-auto pb-6 px-4 w-full">
        <ActivationBtn onClick={continueHandler} navigationLoadingId="DatesContainer" showBtn={showBtn}>
          ادامه
        </ActivationBtn>
      </div>
    </div>
  );
};

export default DatesContainer;
