import { TestKitModalsBabyCheck, TestKitModalsListsDelete, useTestKitModalsInfo } from '@repo/core/components/KitTests';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import TestKitModalsContainerList from './TestKitModalsContainerList';
import useTestKitModalsDelete from './__hooks__/useTestKitModalsDelete';

const TestKitModals = () => {
  const { modalInfo } = useTestKitModalsInfo();
  const { deleteHandler } = useTestKitModalsDelete();

  return (
    <>
      <CustomModal isSlidingMode={true} isOpen={modalInfo !== null}>
        {modalInfo && (
          <div className="h-full">
            {modalInfo.type === 'lists' && (
              <TestKitModalsContainerList gregorianDate={modalInfo.gregorianDate} moduleType={modalInfo.moduleType} />
            )}

            {modalInfo.type === 'babyCheckSelectors' && (
              <TestKitModalsBabyCheck
                moduleType={modalInfo.moduleType}
                babyCheckType={modalInfo.babyCheckType}
                gregorianDate={modalInfo.gregorianDate}
                AnalytisId="Add_BabyCheck_From_Calendar"
              />
            )}
          </div>
        )}
      </CustomModal>

      <TestKitModalsListsDelete onDelete={deleteHandler} />
    </>
  );
};

export default TestKitModals;
