'use client';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import NameSelectorActivationCard from '../../NameSelectorActivationModules/NameSelectorActivationCard';
import NameSelectorActivationMainModule from '../../NameSelectorActivationModules/NameSelectorActivationMainModule';
import useNameSelectorActivationData from '../../__hooks__/useNameSelectorActivationData';
import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const NameSelectorActivationStep4Page = () => {
  const { operatingSystem } = useOperatingSystem();
  const { data, payload, payloadHandler } = useNameSelectorActivationData();
  const { isNextStepLoading, nextStepNavigation, stepInfo } = useNameSelectorActivationSteps();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString().trim().slice(0, 1);
    const persianLettersRegex = /^[\u0600-\u06FF\s]+$/;

    if (value === '' || persianLettersRegex.test(value)) {
      payloadHandler({ name: 'charFilter', value });
    }
  };

  if (!data) {
    return <></>;
  }

  return (
    <NameSelectorActivationMainModule>
      <NameSelectorActivationCard
        currentStep={stepInfo.page}
        onClick={nextStepNavigation}
        btnText={data.charFilter.btn}
        isLoading={isNextStepLoading}
        isDisable={payload.charFilter === ''}
      >
        <CustomTypography fontSize="Title_Small" className="text-impo_Surface_InverseSurface pb-4">
          {data.charFilter.title}
        </CustomTypography>

        <input
          type="text"
          onChange={valueHandler}
          value={payload.charFilter}
          placeholder={data.charFilter.hint}
          style={{ ...typographyFontStyles }}
          className="w-full border-none rounded-xl p-4 bg-impo_Neutral_Background text-impo_Neutral_OnBackground placeholder-[#7E7E7E]"
        />
      </NameSelectorActivationCard>
    </NameSelectorActivationMainModule>
  );
};

export default NameSelectorActivationStep4Page;
