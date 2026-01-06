import Dark_Typography from '@components/ui/Dark_Typography';

import { ProfileInfoPropsType } from './type';

const ProfileInfo = ({ followCount, storyCount }: ProfileInfoPropsType) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center gap-1">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followingCount.toString()}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال شده
        </Dark_Typography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {followCount.followerCount.toString()}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          دنبال کننده
        </Dark_Typography>
      </div>

      <div className="flex flex-col justify-center items-center gap-1">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {storyCount.toString()}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          تجربه ها
        </Dark_Typography>
      </div>
    </div>
  );
};

export default ProfileInfo;
