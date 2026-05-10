import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { AssociationItemHeaderInfoPropsType } from './type';

const AssociationItemHeaderInfo = ({ experienceCount, followerCount, title }: AssociationItemHeaderInfoPropsType) => {
  return (
    <div className="flex flex-col items-end gap-1">
      <CustomTypography className="text-impo_Neutral_OnBackground " fontSize="Title_Small">
        {title}
      </CustomTypography>

      <div className="flex flex-row-reverse gap-2">
        <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
          {` ${experienceCount} تجربه`}
        </CustomTypography>
        <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
          .
        </CustomTypography>
        <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
          {` ${followerCount} دنبال کننده`}
        </CustomTypography>
      </div>
    </div>
  );
};

export default AssociationItemHeaderInfo;
