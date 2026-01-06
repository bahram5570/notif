import GalleryWideIcon from '@assets/icons/galleryWide.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import FileInputManager from '@components/ui/FileInputManager';
import { SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useFileUpload from '@hooks/useFileUpload';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useUpdateProfile from './__hooks__/useUpdateProfile';
import { ShareExperienceChangeAvatarModalContainerPropsType } from './type';

const ShareExperienceChangeAvatarModalContainer = ({
  username,
  id,
}: ShareExperienceChangeAvatarModalContainerPropsType) => {
  const { onProfileChangeHandler } = useUpdateProfile();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v: string) => onProfileChangeHandler({ avatarImage: v, username: username }),
    api: 'shareeexperience/v3/file',
  });

  const selectAvatarHandler = () => {
    if (id) {
      pageNavigationHandler({ id: id, showProgressBar: true });

      const paramsData = JSON.stringify({ id, dummyData: Math.random() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME]: paramsData });
    }
  };

  return (
    <div className="py-5">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center w-full p-2">
        عکس خود را انتخاب کنید
      </Dark_Typography>

      <div className="divide-y divide-impo_Surface_SurfaceVariant flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />

        <div className="flex justify-end items-center gap-2 p-2" onClick={selectAvatarHandler}>
          <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
            آواتار پیش فرض
          </Dark_Typography>

          <div className="w-14 h-14 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
            <GalleryWideIcon className="w-6 h-6 stroke-impo_Neutral_OnBackground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceChangeAvatarModalContainer;
