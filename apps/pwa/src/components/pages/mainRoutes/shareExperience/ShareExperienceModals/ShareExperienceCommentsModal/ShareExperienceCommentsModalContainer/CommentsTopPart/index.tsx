import { UserProfileIconModule } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePassedTime } from '@repo/core/hooks/usePassedTime';

import ShareExperienceFollowModule from '../../../../ShareExperienceModules/ShareExperienceFollowModule';
import { CommentsTopPartProps } from './types';

const CommentsTopPart = (props: CommentsTopPartProps) => {
  const timeScript = usePassedTime(props.createTime);

  return (
    <div className="w-full flex justify-between" dir="rtl">
      <div className="flex gap-2">
        <UserProfileIconModule
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
        <ShareExperienceFollowModule
          name={props.name}
          userId={props.userId}
          experienceId={props.id}
          isFollow={props.isFollow}
        />
      )}
    </div>
  );
};

export default CommentsTopPart;
