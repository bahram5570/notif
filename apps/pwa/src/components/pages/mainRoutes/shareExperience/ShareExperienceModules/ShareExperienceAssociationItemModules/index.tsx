import { SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { ShareExperienceAssociationItemModulesPropsType } from './type';

const ShareExperienceAssociationItemModules = ({
  id,
  image,
  title,
  imageWidth,
  className,
  imageHeight,
}: ShareExperienceAssociationItemModulesPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const clickHandler = () => {
    pageNavigationHandler({ id, navigationType: 'logo' });

    newQueryParamsHandler({ [SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME]: id });
    increaseZIndex(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME, id);
  };

  return (
    <div className={className} onClick={clickHandler}>
      <div
        style={{ width: imageWidth, height: imageHeight, maxWidth: imageWidth, maxHeight: imageHeight }}
        className=" rounded-full"
      >
        <CustomImage_NEW src={image} className=" object-cover w-full h-full" fill />
      </div>

      <CustomTypography
        className="text-impo_Neutral_OnBackground !whitespace-nowrap overflow-hidden"
        fontSize="Lable_SmallProminet"
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default ShareExperienceAssociationItemModules;
