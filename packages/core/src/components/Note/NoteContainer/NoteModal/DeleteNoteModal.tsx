import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { useDelete } from './__hooks__/useDelete';

const DeleteNoteModal = () => {
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();
  const { getQueryParams } = useQueryParamsHandler();

  const noteId = getQueryParams('noteId');

  return (
    <div className="max-w-md flex flex-col items-center gap-4">
      <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
        حذف یادداشت
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        مطمئنی می‌خوای این یادداشت رو حذف کنی؟
      </CustomTypography>

      <div className="w-full flex items-center justify-between gap-2 mt-3">
        <CustomButton
          isLoading={isLoading}
          fontSize="Lable_Medium"
          onClick={() => deleteHandler({ noteId })}
          className="!bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer !text-impo_Error_Error"
        >
          مطمئنم
        </CustomButton>

        <CustomButton
          isLoading={isLoading}
          fontSize="Lable_Medium"
          onClick={() => router.back()}
          className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
        >
          خیر
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteNoteModal;
