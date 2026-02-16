import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { shareExperienceCommentQueryMaker } from '@utils/shareExperience';

import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceContentsModuleProps } from './types';

const ShareExperienceContentsModule = ({ text, image, hasLinkTo, isSelf, id }: ShareExperienceContentsModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useOverlayIndex();

  const selectHandler = () => {
    if (hasLinkTo) {
      if (!isSelf) {
        pageNavigationHandler({ id, showProgressBar: true });

        const { queryKey, queryValue } = shareExperienceCommentQueryMaker(id);
        increaseZIndex(queryKey, id);
        newQueryParamsHandler({ [queryKey]: queryValue });
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 pt-1 pb-4 px-2" dir="rtl">
      <div onClick={selectHandler}>
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {text}
        </CustomTypography>
      </div>

      <div className="bg-impo_Grey_100 w-fit py-[6px] px-[10px] rounded-lg">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
          مامان اولی ها
        </CustomTypography>
      </div>
      {image.trim().length > 0 && (
        <CustomImage
          src={image}
          hasPreviewImage={true}
          previewImageShape="full"
          className="aspect-[16_/_9] rounded-xl object-cover"
        />
      )}
    </div>
  );
};

export default ShareExperienceContentsModule;
