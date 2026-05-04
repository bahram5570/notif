import GalleryWideIcon from '@assets/icons/galleryWide.svg';
import { FileInputManager } from '@repo/core/components/FileInputManager';
import { SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useFileUpload from '@hooks/useFileUpload';
import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import useUpdateProfile from './__hooks__/useUpdateProfile';
import { ShareExperienceChangeAvatarModalContainerPropsType } from './type';

const ShareExperienceChangeAvatarModalContainer = ({
  username,
  id,
}: ShareExperienceChangeAvatarModalContainerPropsType) => {
  const { onProfileChangeHandler } = useUpdateProfile();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceOverlayIndex();
  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => onProfileChangeHandler({ avatarImage: v, username: username }),
    api: 'shareeexperience/v3/file',
  });

  const selectAvatarHandler = () => {
    if (id) {
      pageNavigationHandler({ id: id, showProgressBar: true });

      increaseZIndex(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME, id);
      newQueryParamsHandler({ [SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME]: id });
    }
  };

  return (
    <div className="py-5">
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center w-full p-2">
        عکس خود را انتخاب کنید
      </CustomTypography>

      <div className="flex flex-col">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />

        <div
          className="flex justify-end items-center gap-2 px-2 py-3 border-t border-t-impo_Neutral_Surface"
          onClick={selectAvatarHandler}
        >
          <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
            آواتار پیش فرض
          </CustomTypography>

          <div className="w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
            <GalleryWideIcon className="w-6 h-6 stroke-impo_Neutral_OnBackground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceChangeAvatarModalContainer;
