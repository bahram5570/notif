import { SelectedProfileLink } from '@repo/core/components/ShareExperience';

import ShareExperienceFollowModule from '../../../ShareExperienceModules/ShareExperienceFollowModule';
import ShareExperienceScripts from './ShareExperienceScripts';
import { ShareExperienceTopPartProps } from './types';

const ShareExperienceTopPart = (props: ShareExperienceTopPartProps) => {
  return (
    <div className="w-full flex justify-between items-center" dir="rtl">
      <div className="flex gap-2">
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
        <ShareExperienceFollowModule
          isFollow={props.isFollow}
          userId={props.userId}
          name={props.name}
          experienceId={props.id}
        />
      )}
    </div>
  );
};

export default ShareExperienceTopPart;
