import { KitTestDigitalBabyCheck, KitTestRange, useNewTestKit } from '@repo/core/components/KitTests';
import { Loading } from '@repo/core/components/ui/Loading';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { BabyCheckTypeEnums, KitTestModuleTypeEnums } from '@repo/core/providers/WidgetActionsProvider';
import { useRouter } from 'next/navigation';

import TestKitModalsContainer from '../TestKitModalsContainer';
import { TestKitModalsBabyCheckProps } from './types';

const TestKitModalsBabyCheck = ({
  gregorianDate,
  babyCheckType,
  moduleType,
  AnalytisId,
  onComplete,
}: TestKitModalsBabyCheckProps) => {
  const router = useRouter();
  const { newQuery } = useCustomReactQuery();

  const successHandler = () => {
    router.back();
    newQuery({ queryKey: ['resetBabyCheck'], payload: {} });

    if (onComplete) {
      onComplete();
    }
  };

  const { submitHandler, isLoading } = useNewTestKit({ moduleType, gregorianDate, onSuccess: successHandler });

  return (
    <TestKitModalsContainer title="انجام تست بارداری">
      <>
        {babyCheckType === BabyCheckTypeEnums.Analog && (
          <KitTestRange
            AnalytisId={AnalytisId}
            moduleType={KitTestModuleTypeEnums.BabyCheck}
            subimtHandler={(result) => submitHandler({ babyCheckResult: result, babyCheckType })}
          />
        )}

        {babyCheckType === BabyCheckTypeEnums.Digital && (
          <KitTestDigitalBabyCheck
            AnalytisId={AnalytisId}
            submitHandler={(babyCheckResult) => submitHandler({ babyCheckResult, babyCheckType })}
          />
        )}

        {isLoading && <Loading />}
      </>
    </TestKitModalsContainer>
  );
};

export default TestKitModalsBabyCheck;
