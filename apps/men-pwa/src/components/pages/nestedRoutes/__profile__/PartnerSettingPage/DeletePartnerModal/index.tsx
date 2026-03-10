import TrashIcon from '@assets/shared/icons/trash.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeletePartnerModal = () => {
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();

  return (
    <CustomModal isSlidingMode={false}>
      <div className="w-[290px] flex flex-col items-center gap-4">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-impo_Primary_PrimaryContainer">
          <TrashIcon className="w-6 h-6 rounded-full stroke-impo_Error_Error" />
        </div>

        <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
          حذف همدل
        </CustomTypography>
        <div className="flex flex-col items-center">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            از حذف همدلت مطمئنی؟
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
            بعد از حذف همدلی کلیه اطلاعاتت (تاریخچه چالش ها، خاطره بازی، پیام ها) پاک میشه{' '}
          </CustomTypography>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <CustomButton
            onClick={deleteHandler}
            isLoading={isLoading}
            className="!text-white bg-blue-500 !border-none h-10"
            fontSize="Lable_Large"
          >
            مطمئنم
          </CustomButton>

          <CustomButton
            fontSize="Lable_Large"
            className="h-10 !bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
            onClick={() => router.back()}
          >
            نه
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeletePartnerModal;
