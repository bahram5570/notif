import EditIcon from '@assets/icons/Pen 2.svg';

import {
  SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceAvatarModule from '../../../../ShareExperienceModules/ShareExperienceAvatarModule';
import useShareExperienceFollow from '../../../ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import ProfileInfo from './ProfileInfo';
import { ShareExperienceProfileTopPartPropsType } from './type';

const ShareExperienceProfileTopPart = ({
  followCount,
  storyCount,
  isFollow,
  profile,
  isSelf,
}: ShareExperienceProfileTopPartPropsType) => {
  const { followHandler, isFollowLoading } = useShareExperienceFollow();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const textBtn = isSelf ? 'ویرایش پروفایل' : isFollow ? 'دنبال شده' : 'دنبال کردن';

  const clickHandler = () => {
    if (isSelf) {
      pageNavigationHandler({ id: profile.id, showProgressBar: true });

      const paramsData = JSON.stringify({ id: profile.id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME]: paramsData });
    } else {
      followHandler({ userId: profile.id, isFollow, userName: profile.username });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row-reverse  items-start justify-evenly">
        <div className="flex flex-col justify-center gap-3 items-center">
          <ShareExperienceAvatarModule
            avatarImage={profile.avatarImage}
            showChangeAvatarIcon={isSelf}
            username={profile.username}
            id={profile.id}
          />
          <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground w-full text-right">
            {profile.username}
          </Dark_Typography>
        </div>

        <ProfileInfo followCount={followCount} storyCount={storyCount} userId={profile.id} />
      </div>

      <Dark_Button
        isLoading={isFollowLoading}
        onClick={clickHandler}
        fontSize="Lable_Medium"
        className={`
                    w-full 
                    py-2 
                    ${
                      isSelf
                        ? '!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground'
                        : '!bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Neutral_Background'
                    }
                  `}
      >
        <div
          className={`flex flex-row gap-2  ${isSelf ? 'text-impo_Neutral_OnBackground' : 'text-impo_Primary_OnPrimary'}`}
        >
          {textBtn}
          {isSelf && <EditIcon className={`w-5 h-5 rotate-[360] fill-impo_Neutral_OnBackground`} />}
        </div>
      </Dark_Button>
    </div>
  );
};

export default ShareExperienceProfileTopPart;
