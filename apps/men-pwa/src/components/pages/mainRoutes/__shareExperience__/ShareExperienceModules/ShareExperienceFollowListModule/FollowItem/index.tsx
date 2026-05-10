import { FollowActionModule, SelectedProfileLink } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useFollowUser from '../__hooks__/useFollowUser';
import { FollowItemPropsType } from './type';

const FollowItem = ({ isLastItem, item, pageType, userId }: FollowItemPropsType) => {
  const { followHandler, isLoading } = useFollowUser({
    isFollow: item.isFollowed,
    userId,
    pageType,
    itemId: item.id,
    userName: item.name,
  });

  return (
    <div
      className={`py-4  ${!isLastItem && 'border-b border-b-impo_Surface_SurfaceVariant'} flex flex-row-reverse justify-between items-center`}
    >
      <div className="flex flex-row-reverse items-center gap-2">
        <SelectedProfileLink approvedProfile={false} avatar={item.image} size={48} isSelf={item.isSheMe} id={item.id} />
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {item.name}
        </CustomTypography>
      </div>

      {!item.isSheMe && (
        <FollowActionModule
          isFollowLoading={isLoading}
          followHandler={followHandler}
          userId={item.id}
          isFollow={item.isFollowed}
          name={item.name}
        />
      )}
    </div>
  );
};

export default FollowItem;
