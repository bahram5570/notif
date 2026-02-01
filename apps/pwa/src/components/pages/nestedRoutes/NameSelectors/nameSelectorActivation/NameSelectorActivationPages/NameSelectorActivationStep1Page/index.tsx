'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';

import NameSelectorActivationMainModule from '../../NameSelectorActivationModules/NameSelectorActivationMainModule';
import useNameSelectorActivationData from '../../__hooks__/useNameSelectorActivationData';
import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const NameSelectorActivationStep1Page = () => {
  const { data } = useNameSelectorActivationData();
  const { nextStepNavigation, isNextStepLoading, stepInfo } = useNameSelectorActivationSteps();

  if (!data) {
    return <></>;
  }

  return (
    <NameSelectorActivationMainModule>
      <div className="relative w-full h-[304px] flex justify-center pointer-events-none">
        <CustomImage
          src={'/assets/images/selectNameHollow.webp'}
          className="w-[550px] h-[550px] min-w-[550px] min-h-[550px] -translate-y-[78px]"
        />
      </div>

      <div className="w-full flex flex-col items-center -translate-y-[40px]">
        <CustomTypography fontSize="Title_Medium" className="text-impo_White text-center">
          {data.weclome.title}
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="text-impo_White text-center pt-2 pb-10">
          {data.weclome.description}
        </CustomTypography>

        <Dark_Button
          fontSize="Lable_Large"
          onClick={nextStepNavigation}
          isLoading={isNextStepLoading}
          spinnerClassName="border-impo_Neutral_Background"
          id={`BabyNameActivationStep${stepInfo} BabyNameSelectionStart`}
          className="!bg-impo_Neutral_OnBackground !border-impo_Neutral_OnBackground !text-impo_Neutral_Background !w-[206px]"
        >
          {data.weclome.btn}
        </Dark_Button>
      </div>
    </NameSelectorActivationMainModule>
  );
};

export default NameSelectorActivationStep1Page;
