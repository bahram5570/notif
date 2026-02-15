import { CustomImage } from '@repo/core/components/ui/CustomImage';

import {
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
  SHARE_EXPERIENCE_PROFILE_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceAvatarProps } from './types';

const ShareExperienceAvatar = ({ profile }: ShareExperienceAvatarProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { increaseZIndex } = useOverlayIndex();

  const selectHandler = () => {
    pageNavigationHandler({ id: profile.userId, showProgressBar: true });

    const paramsData = JSON.stringify({
      id: profile.userId,
      [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime(),
    });
    increaseZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, profile.userId);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: paramsData });
  };

  return (
    <div
      className="w-[100dvw] fixed top-7 left-0 right-6 bottom-0 flex justify-end mx-auto pr-4 pb-[100px] pointer-events-none z-40"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="h-fit pointer-events-auto" onClick={selectHandler}>
        <CustomImage src={profile.avatarImage} width={48} className="rounded-full" />
      </div>
    </div>
  );
};

export default ShareExperienceAvatar;
