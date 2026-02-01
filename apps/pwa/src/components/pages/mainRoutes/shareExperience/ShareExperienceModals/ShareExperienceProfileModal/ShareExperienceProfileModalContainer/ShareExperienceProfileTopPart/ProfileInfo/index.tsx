import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ProfileInfoPropsType } from './type';

const ProfileInfo = ({ followCount, storyCount }: ProfileInfoPropsType) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center gap-1">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followingCount.toString()}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال شده
        </CustomTypography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followerCount.toString()}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال کننده
        </CustomTypography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {storyCount.toString()}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          تجربه ها
        </CustomTypography>
      </div>
    </div>
  );
};

export default ProfileInfo;
