import Dark_Typography from '@components/ui/Dark_Typography';
import ShareExperienceProfileIconModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileIconModule';
import useShareExperiencePassedTime from '@components/women/pages/mainRoutes/shareExperience/__hooks__/useShareExperiencePassedTime';

import { ReplyGeneratorTopPartProps } from './types';

const ReplyGeneratorTopPart = (props: ReplyGeneratorTopPartProps) => {
  const timeScript = useShareExperiencePassedTime(props.createTime);

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <Dark_Typography fontSize="Lable_Small" className="text-impo_Grey_500">{`. ${timeScript}`}</Dark_Typography>

        <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
          {props.name}
        </Dark_Typography>
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
