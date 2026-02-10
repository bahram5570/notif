import { CustomModal } from '@repo/core/components/ui/CustomModal';

import TestKitModalsContainer from '@components/pages/nestedRoutes/signs/TestKitModals/TestKitModalsContainer';
import useTestKitModalsInfo from '@components/pages/nestedRoutes/signs/TestKitModals/__hooks__/useTestKitModalsInfo';

import { OvulationKitModalPropsType } from './type';

const OvulationKitModal = ({ data, onDelete }: OvulationKitModalPropsType) => {
  const { modalInfo } = useTestKitModalsInfo();

  return (
    <>
      {/* <CustomModal isSlidingMode={true} isOpen={modalInfo !== null}>
        {modalInfo && (
          <div className="h-full">
            <TestKitModalsContainer title={data.title}>
              <TestKitModalsListsOvulation data={data} />
            </TestKitModalsContainer>
          </div>
        )}
      </CustomModal>

      <TestKitModalsListsDelete onDelete={onDelete} /> */}
    </>
  );
};

export default OvulationKitModal;
