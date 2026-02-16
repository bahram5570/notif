import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ShareExperienceAssociationItemModules from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceAssociationItemModules';
import { FOOTER_HEIGTH } from '@repo/core/constants/app.constants';

import useFollowHandler from './__hooks__/useFollowHandler';
import { ShareExperienceAssociationItemPropsType } from './type';

const ShareExperienceAssociationItem = ({
  isLastItem,
  cover,
  id,
  isFollowed,
  title,
}: ShareExperienceAssociationItemPropsType) => {
  const { followHandler, isLoading } = useFollowHandler({ isFollow: isFollowed, associationId: id });

  const buttonText = isFollowed ? 'دنبال شده' : '  دنبال کردن';

  return (
    <div
      className={`flex flex-row-reverse justify-between items-center py-4 ${!isLastItem && ' border-b border-b-impo_Surface_SurfaceVariant '}`}
      style={{ paddingBottom: isLastItem ? FOOTER_HEIGTH : undefined }}
    >
      <ShareExperienceAssociationItemModules
        image={cover}
        title={title}
        className="flex flex-row-reverse  items-center gap-2"
        id={id}
        imageHeight={48}
        imageWidth={48}
      />

      <CustomButton
        className=" !border-impo_Grey_100 bg-impo_Transparent !w-fit px-5"
        onClick={followHandler}
        isLoading={isLoading}
      >
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
          {buttonText}
        </CustomTypography>
      </CustomButton>
    </div>
  );
};

export default ShareExperienceAssociationItem;
