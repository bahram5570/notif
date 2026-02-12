import { TestKitModalsBabyCheck } from '../../../../KitTests';
import { useTestKitModalsInfo } from '../../../../KitTests/__hooks__/useTestKitModalsInfo';
// import { TestKitModalsContainer } from '../../../../KitTests/TestKitModalsContainer';
import { CustomModal } from '../../../../ui/CustomModal';
import { TestBabyKitModalsPropsType } from './types';

const TestBabyKitModalsLists = ({ onAdd, onDelete, data }: TestBabyKitModalsPropsType) => {
  const { modalInfo } = useTestKitModalsInfo();

  return (
    <>
      <CustomModal isSlidingMode={true} isOpen={modalInfo !== null}>
        <>
          {modalInfo && (
            <div className="h-full">
              {/* {modalInfo.type === 'lists' && (
                <TestKitModalsContainer title={data.title}>
                  <TestKitModalsListsBabyCheck data={data.items} />
                </TestKitModalsContainer>
              )} */}

              {modalInfo.type === 'babyCheckSelectors' && (
                <TestKitModalsBabyCheck
                  onComplete={onAdd}
                  moduleType={modalInfo.moduleType}
                  babyCheckType={modalInfo.babyCheckType}
                  gregorianDate={modalInfo.gregorianDate}
                />
              )}
            </div>
          )}
        </>
      </CustomModal>

      {/* <TestKitModalsListsDelete onDelete={(v) => onDelete(v.index)} /> */}
    </>
  );
};

export default TestBabyKitModalsLists;
