import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import useDelete from './__hooks__/useDelete';

const DeleteNoteModal = () => {
  const router = useRouter();
  const { deleteHandler, isLoading } = useDelete();
  const { getQueryParams } = useQueryParamsHandler();

  const noteId = getQueryParams('noteId');

  return (
    <div className="max-w-md flex flex-col items-center gap-4">
      <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
        حذف یادداشت
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        مطمئنی می‌خوای این یادداشت رو حذف کنی؟
      </Dark_Typography>

      <div className="w-full flex items-center justify-between gap-2 mt-3">
        <Dark_Button
          isLoading={isLoading}
          fontSize="Lable_Medium"
          onClick={() => deleteHandler({ noteId })}
          className="!bg-impo_Error_ErrorContainer !border-impo_Error_ErrorContainer !text-impo_Error_Error"
        >
          مطمئنم
        </Dark_Button>

        <Dark_Button
          isLoading={isLoading}
          fontSize="Lable_Medium"
          onClick={() => router.back()}
          className="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
        >
          خیر
        </Dark_Button>
      </div>
    </div>
  );
};

export default DeleteNoteModal;
