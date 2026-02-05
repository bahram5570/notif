import { BabyCheckTypeEnums } from '@components/KitTests/KitTestBabyCheck/enum';
import KitTestDigitalBabyCheck from '@components/KitTests/KitTestDigitalBabyCheck';
import KitTestRange from '@components/KitTests/KitTestRange';
import useNewTestKit from '@components/KitTests/KitTestsContainer/__hooks__/useNewTestKit';
import { KitTestModuleTypeEnums } from '@components/KitTests/enum';
import Loading from '@components/ui/Loading';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import TestKitModalsContainer from '../TestKitModalsContainer';
import { TestKitModalsBabyCheckProps } from './types';

const TestKitModalsBabyCheck = ({
  gregorianDate,
  babyCheckType,
  moduleType,
  onComplete,
  AnalytisId,
}: TestKitModalsBabyCheckProps) => {
  const router = useRouter();
  const { newQuery } = useCustomReactQuery();

  const successHandler = () => {
    router.back();
    newQuery({ queryKey: ['resetBabyCheck'], payload: {} });
    onComplete && onComplete();
  };

  const { submitHandler, isLoading } = useNewTestKit({ moduleType, gregorianDate, onSuccess: successHandler });

  return (
    <TestKitModalsContainer title="انجام تست بارداری">
      <>
        {babyCheckType === BabyCheckTypeEnums.Analog && (
          <KitTestRange
            moduleType={KitTestModuleTypeEnums.BabyCheck}
            subimtHandler={(result) => submitHandler({ babyCheckResult: result, babyCheckType })}
            AnalytisId={AnalytisId}
          />
        )}

        {babyCheckType === BabyCheckTypeEnums.Digital && (
          <KitTestDigitalBabyCheck
            submitHandler={(babyCheckResult) => submitHandler({ babyCheckResult, babyCheckType })}
            AnalytisId={AnalytisId}
          />
        )}

        {isLoading && <Loading />}
      </>
    </TestKitModalsContainer>
  );
};

export default TestKitModalsBabyCheck;
