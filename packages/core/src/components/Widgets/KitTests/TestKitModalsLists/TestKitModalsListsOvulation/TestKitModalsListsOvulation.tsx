import TrashIcon from '@assets/shared/icons/trash.svg';

import { KitTestModuleTypeEnums } from '../../../../../providers/WidgetActionsProvider';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { kitTestScripts } from '../../KitTestRange/constants';
import TestKitModalsListRangeSVG from '../TestKitModalsListRangeSVG';
import useTestKitsDeleteModal from '../__hooks__/useTestKitsDeleteModal';
import { TestKitModalsListsOvulationProps } from './types';

export const TestKitModalsListsOvulation = ({ data }: TestKitModalsListsOvulationProps) => {
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
            <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
              {testScript(data.result)}
            </CustomTypography>

            <TestKitModalsListRangeSVG result={data.result} />
          </div>
        </div>
      )}
    </>
  );
};
