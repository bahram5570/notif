import TrashIcon from '@assets/shared/icons/trash.svg';

import { BabyCheckTypeEnums, KitTestModuleTypeEnums } from '../../../../providers/WidgetActionsProvider';
import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { kitTestScripts } from '../../KitTestRange/constants';
import TestKitModalsListRangeSVG from '../TestKitModalsListRangeSVG';
import useTestKitsDeleteModal from '../__hooks__/useTestKitsDeleteModal';
import { TestKitModalsListsBabyCheckProps } from './types';

export const TestKitModalsListsBabyCheck = ({ data }: TestKitModalsListsBabyCheckProps) => {
  const { openDeleteModalHandler } = useTestKitsDeleteModal();

  const analogScript = (result: number) => {
    let script = '';

    if (result < 0.1) {
      script = kitTestScripts.babyCheck.resultLow;
    }
    if (result >= 0.1 && result <= 0.9) {
      script = kitTestScripts.babyCheck.resultAverage;
    }
    if (result > 0.9) {
      script = kitTestScripts.babyCheck.resultHigh;
    }

    return script;
  };

  return (
    <>
      {data.map((item, index) => (
        <div className="w-full flex flex-col" key={index}>
          {index > 0 && <div className="w-full h-[1px] my-3 bg-impo_Neutral_Surface" />}

          <div className="w-full flex items-center justify-between gap-1">
            <TrashIcon
              className="w-6 stroke-impo_Error_Error"
              onClick={() =>
                openDeleteModalHandler({
                  index,
                  createTime: item.createTime,
                  moduleType: KitTestModuleTypeEnums.BabyCheck,
                })
              }
            />

            <div className="w-full flex flex-row-reverse items-center gap-2">
              {item.type === BabyCheckTypeEnums.Analog && (
                <>
                  <TestKitModalsListRangeSVG result={item.result} />

                  <div className="flex items-center gap-1">
                    <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                      {analogScript(item.result)}
                    </CustomTypography>

                    <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                      بیبی‌چک نواری:
                    </CustomTypography>
                  </div>
                </>
              )}

              {item.type === BabyCheckTypeEnums.Digital && (
                <>
                  <CustomImage
                    width={56}
                    src={
                      item.result === 1
                        ? '/assets/images/digitalBabyCheckPositive.webp'
                        : '/assets/images/digitalBabyCheckNegative.webp'
                    }
                  />

                  <div className="flex items-center gap-1">
                    <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                      {item.result === 1 ? 'مثبت' : 'منفی'}
                    </CustomTypography>

                    <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                      بیبی‌چک دیجیتال:
                    </CustomTypography>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
