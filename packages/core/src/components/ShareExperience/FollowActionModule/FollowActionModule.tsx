import { useAnalytics } from '../../../hooks/useAnalytics';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '../../../hooks/useShareExperienceHandlers/useShareExperienceHandlers';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { CustomTypography } from '../../ui/CustomTypography';
import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '../constants';
import { FollowActionModuleProps } from './type';

export const FollowActionModule = (props: FollowActionModuleProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const loadingId = `ShareExperienceFollowModule ${props.userId} ${props.experienceId}`;
  const isLoading = props.isFollowLoading || pageNavigationLoading === loadingId;

  const clickHandler = () => {
    callEvent(props.isFollow ? 'shareExperienceUserUnfollowed' : 'ShareExperienceUserFollowed');

    if (!isLoading) {
      if (props.isFollow) {
        const description = `مطمئنی دیگه نمی‌خوای تجربه‌های ${props.name} رو ببینی؟`;
        const queryData = JSON.stringify({
          description,
          experienceId: props.experienceId,
          userId: props.userId,
          userName: props.name,
        });
        increaseZIndex(SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME, props.userId);
        newQueryParamsHandler({ [SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME]: queryData });

        pageNavigationHandler({
          showProgressBar: false,
          id: loadingId,
        });
      } else {
        props.followHandler({ userId: props.userId, isFollow: false, userName: props.name });
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
                    min-w-fit
                    border-[1px] 
                    border-impo_Neutral_Surface
                    rounded-full 
                    py-1 
                    cursor-pointer 
                    px-3
                    ${props.isFollow ? 'bg-impo_Neutral_Surface' : 'bg-impo_OnBlack'}
                  `}
      >
        <CustomTypography
          fontSize="Body_Medium"
          className={`w-full text-impo_Neutral_OnSurface ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          {props.isFollow ? 'دنبال شده' : 'دنبال کردن'}
        </CustomTypography>

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
            <CustomSpinner size={16} className="border-impo_Surface_Outline" />
          </div>
        )}
      </div>
    </>
  );
};
