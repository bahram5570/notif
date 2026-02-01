import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ShareExperienceProfileIconModule from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileIconModule';
import useShareExperiencePassedTime from '@components/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { ReplyGeneratorTopPartProps } from './types';

const ReplyGeneratorTopPart = (props: ReplyGeneratorTopPartProps) => {
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
        size={36}
        id={props.userId}
        avatar={props.avatar}
        isSelf={props.selfExperience}
        approvedProfile={props.approvedProfile}
      />
    </div>
  );
};

export default ReplyGeneratorTopPart;
