import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useShareExperienceFollow from '../../ShareExperienceModals/ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import { ShareExperienceFollowModuleProps } from './types';

const ShareExperienceFollowModule = (props: ShareExperienceFollowModuleProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { followHandler, isFollowLoading } = useShareExperienceFollow(props.experienceId);
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = `ShareExperienceFollowModule ${props.userId}`;
  const isLoading = isFollowLoading || pageNavigationLoading === loadingId;

  const clickHandler = () => {
    callEvent(props.isFollow ? 'shareExperienceUserUnfollowed' : 'ShareExperienceUserFollowed');

    if (!isLoading) {
      if (props.isFollow) {
        const description = `مطمئنی دیگه نمی‌خوای تجربه‌های ${props.name} رو ببینی؟`;
        const queryData = JSON.stringify({
          description,
          experienceId: props.experienceId,
          userId: props.userId,
          dummyData: Math.random(),
          userName: props.name,
        });
        newQueryParamsHandler({ [SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME]: queryData });

        pageNavigationHandler({
          showProgressBar: false,
          id: loadingId,
        });
      } else {
        followHandler({ userId: props.userId, isFollow: false, userName: props.name });
      }
    }
  };

  return (
    <>
      <div
        onClick={clickHandler}
        className={`
                    relative 
                    flex 
                    justify-center 
                    h-fit 
                    border-[1px] 
                    border-impo_Neutral_Surface
                    rounded-full 
                    py-1 
                    cursor-pointer 
                    px-3
                    ${props.isFollow ? 'bg-impo_Neutral_Surface' : 'bg-impo_OnBlack'}
                  `}
      >
        <Dark_Typography
          fontSize="Body_Medium"
          className={`w-full text-impo_Neutral_OnSurface ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          {props.isFollow ? 'دنبال شده' : 'دنبال کردن'}
        </Dark_Typography>

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
            <Dark_Spinner size={16} className="border-impo_Surface_Outline" />
          </div>
        )}
      </div>
    </>
  );
};

export default ShareExperienceFollowModule;
