import CustomModal from '@components/ui/CustomModal';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeleteMemoryModal = () => {
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();

  return (
    <CustomModal>
      <div className="w-[290px] flex flex-col items-center gap-4">
        <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
          حذف خاطره
        </Dark_Typography>
        <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
          می‌خوای این خاطره رو حذف کنی؟
        </Dark_Typography>

        <div className="w-full flex items-center justify-between gap-2">
          <Dark_Button
            className="!text-impo_Error_Error bg-impo_Primary_PrimaryContainer dark:bg-impo_Primary_OnPrimaryContainer border-impo_Primary_PrimaryContainer  dark:border-impo_Primary_OnPrimaryContainer"
            onClick={deleteHandler}
            fontSize="Lable_Large"
            isLoading={isLoading}
          >
            حذف
          </Dark_Button>

          <Dark_Button
            className="!text-impo_Neutral_OnSurface !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
            onClick={() => router.back()}
            fontSize="Lable_Large"
          >
            خیر
          </Dark_Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeleteMemoryModal;
