import { UserProfileIconModule } from '@repo/core/components/ShareExperience';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useFollowUser from './__hooks__/useFollowUser';
import { ShareExperienceFollowItemModulePropsType } from './type';

const ShareExperienceFollowItemModule = ({
  isLastItem,
  item,
  pageType,
  userId,
}: ShareExperienceFollowItemModulePropsType) => {
  const { followHandler, isLoading } = useFollowUser({
    isFollow: item.isFollowed,
    userId,
    pageType,
    itemId: item.id,
    userName: item.name,
  });
  const buttonText = item.isFollowed ? 'دنبال شده' : 'دنبال کردن';

  return (
    <div
      className={`py-4  ${!isLastItem && 'border-b border-b-impo_Surface_SurfaceVariant'} flex flex-row-reverse justify-between items-center`}
    >
      <div className="flex flex-row-reverse items-center gap-2">
        <UserProfileIconModule
          approvedProfile={false}
          avatar={item.image}
          size={48}
          isSelf={item.isSheMe}
          id={item.id}
        />
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {item.name}
        </CustomTypography>
      </div>

      {!item.isSheMe && (
        <CustomButton
          className=" !border-impo_Grey_100 bg-impo_Transparent !w-fit px-5"
          onClick={followHandler}
          isLoading={isLoading}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
            {buttonText}
          </CustomTypography>
        </CustomButton>
      )}
    </div>
  );
};

export default ShareExperienceFollowItemModule;
