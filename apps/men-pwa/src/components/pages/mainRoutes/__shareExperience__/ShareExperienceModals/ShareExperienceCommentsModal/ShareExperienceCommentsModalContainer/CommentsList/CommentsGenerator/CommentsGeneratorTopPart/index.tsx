import { SelectedProfileLink } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePassedTime } from '@repo/core/hooks/usePassedTime';

import { CommentsGeneratorTopPartProps } from './types';

const CommentsGeneratorTopPart = (props: CommentsGeneratorTopPartProps) => {
  const timeScript = usePassedTime(props.createTime);

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Grey_500">{`. ${timeScript}`}</CustomTypography>

        <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
          {props.name}
        </CustomTypography>
      </div>

      <SelectedProfileLink
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
