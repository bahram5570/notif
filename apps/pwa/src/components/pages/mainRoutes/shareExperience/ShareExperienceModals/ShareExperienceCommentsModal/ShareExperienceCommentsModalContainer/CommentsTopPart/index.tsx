import { FollowActionModule, SelectedProfileLink } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePassedTime } from '@repo/core/hooks/usePassedTime';

import useShareExperienceFollow from '../../../ShareExperienceUnfollowModal/__hooks__/useShareExperienceFollow';
import { CommentsTopPartProps } from './types';

const CommentsTopPart = (props: CommentsTopPartProps) => {
  const timeScript = usePassedTime(props.createTime);
  const { followHandler, isFollowLoading } = useShareExperienceFollow(props.id);

  return (
    <div className="w-full flex justify-between" dir="rtl">
      <div className="flex gap-2">
        <SelectedProfileLink
          size={40}
          id={props.userId}
          isSelf={props.self}
          avatar={props.avatar}
          approvedProfile={props.approvedProfile}
        />

        <div className="flex flex-col">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {props.name}
          </CustomTypography>

          <CustomTypography fontSize="Lable_Small" className="text-impo_Grey_500">
            {timeScript}
          </CustomTypography>
        </div>
      </div>

      {!props.self && (
        <FollowActionModule
          isFollowLoading={isFollowLoading}
          followHandler={followHandler}
          userId={props.userId}
          experienceId={props.id}
          isFollow={props.isFollow}
          name={props.name}
        />
      )}
    </div>
  );
};

export default CommentsTopPart;
