import { FollowActionModule } from '../FollowActionModule/FollowActionModule';
import { SelectedProfileLink } from '../SelectedProfileLink/SelectedProfileLink';
import ShareExperienceScripts from './ShareExperienceScripts';
import { HeaderPostSectionProps } from './type';

export const HeaderPostSection = (props: HeaderPostSectionProps) => {
  return (
    <div className="w-full flex justify-between items-center" dir="rtl">
      <div className="flex gap-2 pl-1">
        <SelectedProfileLink
          approvedProfile={props.approvedProfile}
          isSelf={props.selfExperience}
          avatar={props.avatar}
          size={40}
          id={props.userId}
        />

        <ShareExperienceScripts
          name={props.name}
          isPin={props.isPin}
          topicName={props.topicName}
          createTime={props.createTime}
        />
      </div>

      {!props.selfExperience && (
        <FollowActionModule
          isFollowLoading={props.isFollowLoading}
          followHandler={props.followHandler}
          userId={props.userId}
          experienceId={props.id}
          isFollow={props.isFollow}
          name={props.name}
        />
      )}
    </div>
  );
};
