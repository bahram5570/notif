// import { TestKitModalsContainer, useTestKitModalsInfo } from '@repo/core/components/KitTests';
// import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { OvulationKitModalPropsType } from './types';

const OvulationKitModal = ({ data, onDelete }: OvulationKitModalPropsType) => {
  // const { modalInfo } = useTestKitModalsInfo();

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
