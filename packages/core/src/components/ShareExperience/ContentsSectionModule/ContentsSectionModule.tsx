import { shareExperienceCommentQueryMaker } from '../../../utils/shareExperience';

import { useCustomToast } from '../../../hooks/useCustomToast';
import { useShareExperienceOverlayIndex } from '../../../hooks/useOverlayIndex';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useWidgetActions } from '../../../hooks/useWidgetActions';
import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
import { CustomTypography } from '../../ui/CustomTypography';
import { TagType } from '../types';
import { ContentsSectionModuleProps } from './type';

export const ContentsSectionModule = (props: ContentsSectionModuleProps) => {
  const { hasLinkTo = true, id, image, text, tags } = props;

  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceOverlayIndex();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { actionHandler } = useWidgetActions();
  const toast = useCustomToast();

  const clickHandler = (tag: TagType) => {
    if (tag.action) {
      return actionHandler(tag.action);
    }

    toast.notifyToastHandler({ message: 'این پاتوق فعلا غیرفعال شده', position: 'top-right', type: 'warning' });
  };

  const hasTags = tags && tags.length > 0;

  const selectHandler = () => {
    if (hasLinkTo) {
      pageNavigationHandler({ id, showProgressBar: true });

      const { queryKey, queryValue } = shareExperienceCommentQueryMaker(id);
      increaseZIndex(queryKey, id);
      newQueryParamsHandler({ [queryKey]: queryValue });
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 pt-1 pb-4 px-2" dir="rtl">
      <div onClick={selectHandler}>
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {text}
        </CustomTypography>
      </div>

      {hasTags &&
        tags.map((tag, index) => {
          return (
            <div
              key={index}
              onClick={() => clickHandler(tag)}
              className="bg-impo_Grey_100 w-fit py-[6px] px-[10px] rounded-lg"
            >
              <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
                {tag.title}
              </CustomTypography>
            </div>
          );
        })}

      {image.trim().length > 0 && (
        <div className="relative w-full aspect-[16_/_9] rounded-xl overflow-hidden">
          <CustomImage_NEW src={image} fill={true} hasPreviewImage={true} className="object-cover" />
        </div>
      )}
    </div>
  );
};
