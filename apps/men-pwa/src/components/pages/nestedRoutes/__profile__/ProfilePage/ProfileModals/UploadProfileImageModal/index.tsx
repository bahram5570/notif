import TrashIcon from '@assets/shared/icons/trash.svg';
import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useFileUpload } from '@repo/core/hooks/useFileUpload';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import useDeleteProfileImage from './__hooks__/useDeleteProfileImage';
import useEditProfileImage from './__hooks__/useEditProfileImage';

const UploadProfileImageModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { deleteProfileImageHandler } = useDeleteProfileImage();
  const { editProfileImageHandler } = useEditProfileImage();
  const canDeleteImage = getQueryParams('canDeleteProfile');

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => {
      editProfileImageHandler({ fileName: v });
    },

    api: 'profile/image',
    method: 'PUT',
  });

  return (
    <div className="py-5">
      <CustomTypography fontSize="Title_Small" className="w-full p-2 text-center text-impo_Neutral_OnBackground">
        عکس خود را انتخاب کنید
      </CustomTypography>

      <div className="flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />

        {canDeleteImage && JSON.parse(canDeleteImage) && (
          <div
            className="flex justify-end items-center gap-2 p-2 border-t border-t-impo_Neutral_Surface"
            onClick={deleteProfileImageHandler}
          >
            <CustomTypography className="text-impo_Error_Error" fontSize="Body_Large">
              حذف عکس
            </CustomTypography>
            <div className="w-14 h-14 rounded-full flex justify-center items-center border border-impo_Surface_SurfaceVariant">
              <TrashIcon className="w-7 h-7 stroke-impo_Error_Error" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadProfileImageModal;
