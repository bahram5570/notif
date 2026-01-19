import TrashIcon from '@assets/icons/trash.svg';

import CustomModal from '@components/ui/CustomModal';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeletePartnerModal = () => {
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();

  return (
    <CustomModal isSlidingMode={false}>
      <div className="w-[290px] flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full"
          style={{
            backgroundColor: 'rgb(242, 79, 122,0.15)',
          }}
        >
          <TrashIcon className="w-6 h-6 rounded-full stroke-impo_Error_Error" />
        </div>

        <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
          حذف همدل
        </Dark_Typography>
        <div className="flex flex-col items-center">
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            از حذف همدلت مطمئنی؟
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
            بعد از حذف همدلی کلیه اطلاعاتت (تاریخچه چالش ها، خاطره بازی، پیام ها) پاک میشه{' '}
          </Dark_Typography>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <Dark_Button
            onClick={deleteHandler}
            isLoading={isLoading}
            className="!text-impo_Error_Error !bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer h-10"
            fontSize="Lable_Large"
          >
            مطمئنم
          </Dark_Button>

          <Dark_Button
            fontSize="Lable_Large"
            className="h-10 !bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
            onClick={() => router.back()}
          >
            خیر
          </Dark_Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default DeletePartnerModal;
