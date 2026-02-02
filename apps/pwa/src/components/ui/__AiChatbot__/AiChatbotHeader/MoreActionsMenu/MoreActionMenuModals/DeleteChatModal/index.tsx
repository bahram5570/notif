import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CommenPropsType } from '../type';
import useDelete from './__hooks__/useDelete';

const DeleteChatModal = ({ onCloseModal }: CommenPropsType) => {
  const { isLoading, onDeleteHandler } = useDelete();

  const onClick = () => {
    onDeleteHandler();
  };
  return (
    <div className="px-4 flex flex-col gap-2 max-w-xs mt-4">
      <div className="flex flex-col justify-center items-center">
        <CustomTypography className="text-impo_Black" fontSize="Title_Small">
          حذف مکالمه
        </CustomTypography>
        <CustomTypography className="text-impo_Surface_InverseSurface text-center" fontSize="Body_Medium">
          مطمئنی که میخوای همه پیام‌هات در این تالار رو با مونس حدف کنی؟
        </CustomTypography>
      </div>

      <div className="flex w-full justify-between gap-2">
        <CustomButton onClick={onClick} isLoading={isLoading} fontSize="Lable_Large">
          بله، مطمئنم
        </CustomButton>
        <CustomButton
          onClick={onCloseModal}
          className="text-impo_Neutral_OnBackground bg-impo_Surface_OutlineVariant !border-impo_Surface_OutlineVariant"
        >
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            نه، اشتباه شد
          </CustomTypography>
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteChatModal;
