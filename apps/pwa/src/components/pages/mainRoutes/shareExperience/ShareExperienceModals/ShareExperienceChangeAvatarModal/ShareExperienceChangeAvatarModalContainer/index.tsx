import GalleryWideIcon from '@assets/icons/galleryWide.svg';

import {
  SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import FileInputManager from '@components/ui/FileInputManager';
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

      const paramsData = JSON.stringify({ id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME]: paramsData });
    }
  };

  return (
    <div className="py-5">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center w-full p-2">
        عکس خود را انتخاب کنید
      </Dark_Typography>

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
          <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
            آواتار پیش فرض
          </Dark_Typography>

          <div className="w-12 h-12 border-[1px] border-impo_Surface_SurfaceVariant rounded-full flex justify-center items-center">
            <GalleryWideIcon className="w-6 h-6 stroke-impo_Neutral_OnBackground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceChangeAvatarModalContainer;
