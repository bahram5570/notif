// import { currentDate } from '../../../../utils/dates';
// import { KitTestsTypes } from '../../../../providers/WidgetActionsProvider';
// import TestBabyKitModalsLists from './TestBabyKitModalsLists';
// import useNewBabyCheckData from './__hooks__/useNewBabyCheckData';
import { WidgetBabyCheckKitCardProps } from './types';

// const { gDate } = currentDate();

export const WidgetBabyCheckKitCard = ({ data }: WidgetBabyCheckKitCardProps) => {
  // const { onAdd, onDelete, updatedData } = useNewBabyCheckData({ data });

  // const testData: KitTestsTypes = {
  //   babyChecks: updatedData.items,
  //   ovulationResult: { result: 0, createTime: '', count: 0 },
  // };

  return (
    <>
      {/* <KitTestsContainer data={testData} gregorianDate={gDate} moduleType={KitTestModuleTypeEnums.BabyCheck} />
      <TestBabyKitModalsLists onAdd={onAdd} onDelete={onDelete} data={updatedData} /> */}
    </>
  );
};
