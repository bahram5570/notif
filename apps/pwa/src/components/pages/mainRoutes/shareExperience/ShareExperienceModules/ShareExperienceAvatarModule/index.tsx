import UploadIcon from '@assets/icons/upload.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

import { SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceAvatarModulePropsType } from './type';

const ShareExperienceAvatarModule = ({
  showChangeAvatarIcon,
  avatarImage,
  username,
  id,
}: ShareExperienceAvatarModulePropsType) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useOverlayIndex();

  const selectProfileHandler = () => {
    callEvent('ShareExperienceSelfProfile');
    pageNavigationHandler({ id: id, showProgressBar: true });

    const paramsData = JSON.stringify({
      id: id,
      username: username,
      avatar: avatarImage,
    });

    increaseZIndex(SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME, id);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME]: paramsData });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative">
        <div
          className="overflow-hidden rounded-full flex justify-center items-center"
          onClick={() => callEvent(showChangeAvatarIcon ? 'ShareExperienceSelfProfile' : 'ShareExperienceOtherProfile')}
        >
          <CustomImage
            width={88}
            height={88}
            src={avatarImage}
            hasPreviewImage={true}
            className="!object-cover"
            previewImageShape="circle"
          />
        </div>

        {showChangeAvatarIcon && (
          <div className="absolute top-[65%] left-[76%] z-30 select-none" onClick={selectProfileHandler}>
            <div className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-impo_Neutral_OnBackground cursor-pointer">
              <UploadIcon className="w-4 h-4 fill-impo_Neutral_Background" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareExperienceAvatarModule;
