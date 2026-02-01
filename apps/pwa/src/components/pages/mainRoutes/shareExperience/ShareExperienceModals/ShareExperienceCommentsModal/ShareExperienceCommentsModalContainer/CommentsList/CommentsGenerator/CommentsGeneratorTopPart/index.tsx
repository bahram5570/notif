import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ShareExperienceProfileIconModule from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileIconModule';
import useShareExperiencePassedTime from '@components/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { CommentsGeneratorTopPartProps } from './types';

const CommentsGeneratorTopPart = (props: CommentsGeneratorTopPartProps) => {
  const timeScript = useShareExperiencePassedTime(props.createTime);

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Grey_500">{`. ${timeScript}`}</CustomTypography>

        <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
          {props.name}
        </CustomTypography>
      </div>

      <ShareExperienceProfileIconModule
        approvedProfile={props.approvedProfile}
        isSelf={props.selfComment}
        avatar={props.avatar}
        size={36}
        id={props.userId}
      />
    </div>
  );
};

export default CommentsGeneratorTopPart;
