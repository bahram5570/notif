import {
  SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME,
  SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followingCount.toString()}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال شده
        </Dark_Typography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1" onClick={followerSelectHandler}>
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followerCount.toString()}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال کننده
        </Dark_Typography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {storyCount.toString()}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          تجربه ها
        </Dark_Typography>
      </div>
    </div>
  );
};

export default ProfileInfo;
