'use client';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';

import CycleContainer from '../CycleContainer';
import ErrorCycleAppBar from '../ErrorCycleAppBar';
import useGetData from '../__hooks__/useGetData';

const CyclePage = () => {
  const { data, cycleResetKey, hasError } = useGetData();

  return (
    <div style={{ paddingBottom: FOOTER_HEIGHT + 16 }} key={cycleResetKey}>
      {hasError && <ErrorCycleAppBar />}
      {!hasError && <CycleContainer data={data} />}
    </div>
  );
};

export default CyclePage;
