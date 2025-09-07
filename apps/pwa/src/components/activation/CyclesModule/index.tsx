import WheelPicker from '@components/ui/WheelPicker';
import WheelPickerDivider from '@components/ui/WheelPicker/WheelPickerDivider';
import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';

import useInitialValueHandler from './__hooks__/useInitialValueHandler';
import useListMaker from './__hooks__/useListMaker';
import { CyclesModuleProps } from './types';

const CyclesModule = (props: CyclesModuleProps) => {
  const { dataList } = useListMaker(props);
  const { isLargeScreen } = useActivationIsLargeScreen();

  const valueHandler = (v: string | number) => {
    props.valueHandler(Number(v));
  };

  useInitialValueHandler(() => {
    valueHandler(dataList?.defaultValue || 0);
  });

  return (
    <div
      style={{ marginTop: isLargeScreen ? '40px' : '0' }}
      className="relative w-[calc(100%_-_48px)] flex justify-center mx-auto"
    >
      {dataList && (
        <>
          <WheelPickerDivider isTop={true} />
          <WheelPicker list={dataList.list} defaultValue={dataList.defaultValue} valueHandler={valueHandler} />
          <WheelPickerDivider isTop={false} />
        </>
      )}
    </div>
  );
};

export default CyclesModule;
