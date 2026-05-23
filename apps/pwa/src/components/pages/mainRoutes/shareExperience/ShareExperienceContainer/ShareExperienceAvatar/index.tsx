import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { ShareExperienceAvatarProps } from './types';

const ShareExperienceAvatar = ({ profile }: ShareExperienceAvatarProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { increaseZIndex } = useShareExperienceHandlers();

  const selectHandler = () => {
    pageNavigationHandler({ id: profile.userId, navigationType: 'logo' });

    increaseZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, profile.userId);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: profile.userId });
  };

  return (
    <div
      className="w-[100dvw] fixed top-2 left-0 right-6 bottom-0 flex justify-end mx-auto pr-4 pb-[100px] pointer-events-none z-40"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="h-fit pointer-events-auto" onClick={selectHandler}>
        <CustomImage_NEW src={profile.avatarImage} width={40} height={40} className="rounded-full" />
      </div>
    </div>
  );
};

export default ShareExperienceAvatar;
