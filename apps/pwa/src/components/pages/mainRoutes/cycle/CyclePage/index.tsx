'use client';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';

import CycleContainer from '../CycleContainer';
import ErrorCycleAppBar from '../ErrorCycleAppBar';
import useGetData from '../__hooks__/useGetData';

const CyclePage = ({ res }) => {
  const { data, cycleResetKey, hasError } = useGetData();
  console.log(res);

  return (
    <div style={{ paddingBottom: FOOTER_HEIGTH + 16 }} key={cycleResetKey}>
      {hasError && <ErrorCycleAppBar />}
      {!hasError && <CycleContainer data={data} />}
    </div>
  );
};

export default CyclePage;
