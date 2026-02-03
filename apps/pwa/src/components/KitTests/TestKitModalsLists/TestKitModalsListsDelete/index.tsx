import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomModal from '@components/ui/CustomModal';
import Loading from '@components/ui/Loading';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { KitTestModuleTypeEnums } from '../../enum';
import { DeleteModalDataTypes } from '../__hooks__/useTestKitsDeleteModal/types';
import useTestKitDelete from './__hooks__/useTestKitDelete';
import { TestKitModalsListsDeleteProps } from './types';

const TestKitModalsListsDelete = ({ onDelete }: TestKitModalsListsDeleteProps) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const deleteQuery = getQueryParams(MODALS.TEST_KITS_LIST_DELETE);
  const deleleData = deleteQuery === null ? null : (JSON.parse(deleteQuery) as DeleteModalDataTypes);
  const isOvulationOpen = deleleData?.moduleType === KitTestModuleTypeEnums.Ovulation;
  const isBabyCheckOpen = deleleData?.moduleType === KitTestModuleTypeEnums.BabyCheck;

  const { isLoading, testKitDeleteHandler } = useTestKitDelete({
    onDelete,
    isDeleteModalOpen: isOvulationOpen || isBabyCheckOpen,
  });

  const deleteHandler = () => {
    if (deleleData) {
      testKitDeleteHandler(deleleData);
    }
  };

  return (
    <>
      <CustomModal isOpen={isOvulationOpen} className="!w-[calc(100%_-_32px)] flex items-center">
        <div className="w-full flex flex-col items-center gap-6">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            تست تخمک گذاری مورد نظر حذف شود؟
          </CustomTypography>

          <div className="w-full flex justify-between gap-4">
            <CustomButton fontSize="Lable_Large" onClick={deleteHandler}>
              بله
            </CustomButton>

            <CustomButton
              fontSize="Lable_Large"
              onClick={() => router.back()}
              className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
            >
              خیر
            </CustomButton>
          </div>
        </div>
      </CustomModal>

      <CustomModal isOpen={isBabyCheckOpen} className="!w-[calc(100%_-_32px)] flex items-center">
        <div className="w-full flex flex-col items-center gap-6">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            تست بارداری مورد نظر حذف شود؟
          </CustomTypography>

          <div className="w-full flex justify-between gap-4">
            <CustomButton fontSize="Lable_Large" onClick={deleteHandler}>
              بله
            </CustomButton>

            <CustomButton
              onClick={() => router.back()}
              fontSize="Lable_Large"
              className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
            >
              خیر
            </CustomButton>
          </div>
        </div>
      </CustomModal>

      {isLoading && <Loading />}
    </>
  );
};

export default TestKitModalsListsDelete;
