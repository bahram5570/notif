import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceAvatarProps } from './types';

const ShareExperienceAvatar = ({ profile }: ShareExperienceAvatarProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { increaseZIndex } = useShareExperienceOverlayIndex();

  const selectHandler = () => {
    pageNavigationHandler({ id: profile.userId, showProgressBar: true });

    increaseZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, profile.userId);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: profile.userId });
  };

  return (
    <div
      className="w-[100dvw] fixed top-2 left-0 right-6 bottom-0 flex justify-end mx-auto pr-4 pb-[100px] pointer-events-none z-40"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="h-fit pointer-events-auto" onClick={selectHandler}>
        <CustomImage src={profile.avatarImage} width={40} className="rounded-full" />
      </div>
    </div>
  );
};

export default ShareExperienceAvatar;
