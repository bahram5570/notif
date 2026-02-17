import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME } from '../../constants';
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
  const { increaseZIndex } = useOverlayIndex();

  const clickHandler = () => {
    pageNavigationHandler({ id, showProgressBar: true });

    newQueryParamsHandler({ [SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME]: id });
    increaseZIndex(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME, id);
  };

  return (
    <div className={className} onClick={clickHandler}>
      <CustomImage src={image} width={imageWidth} height={imageHeight} className=" rounded-full" />
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
