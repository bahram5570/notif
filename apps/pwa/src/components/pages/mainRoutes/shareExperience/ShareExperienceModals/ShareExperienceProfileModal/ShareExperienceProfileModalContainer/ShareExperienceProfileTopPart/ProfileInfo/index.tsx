import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import {
  SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME,
  SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ProfileInfoPropsType } from './type';

const ProfileInfo = ({ followCount, storyCount, userId }: ProfileInfoPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { increaseZIndex } = useOverlayIndex();

  const followerSelectHandler = () => {
    pageNavigationHandler({ id: userId, showProgressBar: true });

    const paramsData = JSON.stringify({ userId: userId, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
    increaseZIndex(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME, userId);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME]: paramsData });
  };

  const followingSelectHandler = () => {
    pageNavigationHandler({ id: userId, showProgressBar: true });

    const paramsData = JSON.stringify({ userId: userId, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
    increaseZIndex(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME, userId);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME]: paramsData });
  };

  return (
    //
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center gap-1" onClick={followingSelectHandler}>
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followingCount.toString()}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال شده
        </CustomTypography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1" onClick={followerSelectHandler}>
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followerCount.toString()}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال کننده
        </CustomTypography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {storyCount.toString()}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          تجربه ها
        </CustomTypography>
      </div>
    </div>
  );
};

export default ProfileInfo;
