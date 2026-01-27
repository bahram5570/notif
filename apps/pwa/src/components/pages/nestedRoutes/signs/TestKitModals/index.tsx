import TestKitModalsListsDelete from '@components/KitTests/TestKitModalsLists/TestKitModalsListsDelete';
import CustomModal from '@components/ui/CustomModal';

import TestKitModalsBabyCheck from './TestKitModalsBabyCheck';
import TestKitModalsContainerList from './TestKitModalsContainerList';
import useTestKitModalsDelete from './__hooks__/useTestKitModalsDelete';
import useTestKitModalsInfo from './__hooks__/useTestKitModalsInfo';

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
