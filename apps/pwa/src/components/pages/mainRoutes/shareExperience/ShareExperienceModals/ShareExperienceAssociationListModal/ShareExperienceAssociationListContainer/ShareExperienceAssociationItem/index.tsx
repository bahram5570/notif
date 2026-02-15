import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ShareExperienceAssociationItemModules from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceAssociationItemModules';

import { ShareExperienceAssociationItemPropsType } from './type';

const ShareExperienceAssociationItem = ({ isLastItem, image, title }: ShareExperienceAssociationItemPropsType) => {
  const buttonText = '  دنبال کردن';
  return (
    <div
      className={`flex flex-row-reverse justify-between items-center py-4 ${!isLastItem && ' border-b border-b-impo_Surface_SurfaceVariant'}`}
    >
      <ShareExperienceAssociationItemModules
        image={image}
        title={title}
        className="flex flex-row-reverse  items-center gap-2"
        id="123"
        imageHeight={48}
        imageWidth={48}
      />

      <CustomButton
        className=" !border-impo_Grey_100 bg-impo_Transparent !w-fit px-5"
        onClick={() => {}}
        // isLoading={isLoading}
      >
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
          {buttonText}
        </CustomTypography>
      </CustomButton>
    </div>
  );
};

export default ShareExperienceAssociationItem;
