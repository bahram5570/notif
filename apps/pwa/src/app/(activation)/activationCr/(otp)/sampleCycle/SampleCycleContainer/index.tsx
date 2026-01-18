import FakeCycleContainer from '@app/(activation)/activationCr/(goal)/fakeCycle/FakeCyclePageContainer/PageContainer/FakeCycleContainer';
import CycleContainer from '@components/women/pages/mainRoutes/cycle/CycleContainer';
import useIsRendered from '@hooks/useIsRendered';

import BottomPart from './BottomPart';
import SampleCycleContinueBtn from './SampleCycleContinueBtn';
import SampleCycleHeading from './SampleCycleHeading';
import useGetData from './__hooks__/useGetData';
import { SampleCycleContainerProps } from './types';

const SampleCycleContainer = ({ payload }: SampleCycleContainerProps) => {
  const { isRendered } = useIsRendered();
  const { data } = useGetData();

  if (!isRendered) {
    return <></>;
  }

  return (
    <FakeCycleContainer>
      <CycleContainer data={data} customAppBar={<SampleCycleHeading payload={payload} />}>
        <BottomPart payload={payload} />
        <SampleCycleContinueBtn />
      </CycleContainer>
    </FakeCycleContainer>
  );
};

export default SampleCycleContainer;
