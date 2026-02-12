import { useRouter } from 'next/navigation';

import { useCustomReactQuery } from '../../../hooks/useCustomReactQuery';
import { BabyCheckTypeEnums, KitTestModuleTypeEnums } from '../../../providers/WidgetActionsProvider';
import { Loading } from '../../ui/Loading';
import { KitTestDigitalBabyCheck } from '../KitTestDigitalBabyCheck';
import { KitTestRange } from '../KitTestRange';
import { useNewTestKit } from '../KitTestsContainer/__hooks__/useNewTestKit';
import { TestKitModalsContainer } from '../TestKitModalsContainer';
import { TestKitModalsBabyCheckProps } from './types';

export const TestKitModalsBabyCheck = ({
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
