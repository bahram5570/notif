import TrashIcon from '@assets/icons/trash.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import { kitTestScripts } from '@components/women/KitTests/KitTestRange/constants';

import { KitTestModuleTypeEnums } from '../../enum';
import TestKitModalsListRangeSVG from '../TestKitModalsListRangeSVG';
import useTestKitsDeleteModal from '../__hooks__/useTestKitsDeleteModal';
import { TestKitModalsListsOvulationProps } from './types';

const TestKitModalsListsOvulation = ({ data }: TestKitModalsListsOvulationProps) => {
  const { openDeleteModalHandler } = useTestKitsDeleteModal();

  const testScript = (result: number) => {
    let script = '';

    if (result < 0.1) {
      script = kitTestScripts.babyCheck.resultLow;
    }
    if (result > 0.1 && result < 0.9) {
      script = kitTestScripts.babyCheck.resultAverage;
    }
    if (result >= 0.9) {
      script = kitTestScripts.babyCheck.resultHigh;
    }

    return script;
  };

  const deleteHandler = () => {
    if (data) {
      openDeleteModalHandler({ createTime: data.createTime, moduleType: KitTestModuleTypeEnums.Ovulation, index: -1 });
    }
  };

  return (
    <>
      {data && (
        <div className="w-full flex items-center justify-between gap-1">
          <TrashIcon className="w-6 stroke-impo_Error_Error" onClick={deleteHandler} />

          <div className="flex items-center gap-2">
            <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
              {testScript(data.result)}
            </Dark_Typography>

            <TestKitModalsListRangeSVG result={data.result} />
          </div>
        </div>
      )}
    </>
  );
};

export default TestKitModalsListsOvulation;
