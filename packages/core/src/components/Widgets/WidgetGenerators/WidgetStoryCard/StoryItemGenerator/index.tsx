import { useMemo } from 'react';

import { STORY_MODAL_ID } from '../../../../../constants/modal.constants';
import { useAnalytics } from '../../../../../hooks/useAnalytics';
import { usePageNavigationLoading } from '../../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../../../hooks/useSystem';
import { CustomImage_NEW } from '../../../../ui/CustomImage_NEW';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { STORY_CIRCLE_WIDTH } from '../constants';
import { StoryItemGeneratorProps } from './types';

export const StoryItemGenerator = ({ coverImage, isViewed, text, id }: StoryItemGeneratorProps) => {
  const { callEvent } = useAnalytics();
  const { appName } = useSystem();

  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const loadingId = `StoryItemGenerator-${id}`;
  const isLoading = navigationLoadingId === loadingId;

  const selectHandler = () => {
    callEvent('StoryClick');
    if (!isLoading) {
      newQueryParamsHandler({ [STORY_MODAL_ID]: id });
      pageNavigationHandler({ id: loadingId });
    }
  };

  const borderColor = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'border-impo_PrimaryMan_PrimaryMan';

      default:
        return 'border-impo_Primary_Primary';
    }
  }, [appName]);

  return (
    <div
      onClick={selectHandler}
      style={{ width: STORY_CIRCLE_WIDTH * 3 }}
      className="flex flex-col items-center justify-center gap-2 cursor-pointer"
    >
      <div
        style={{
          width: STORY_CIRCLE_WIDTH,
          height: STORY_CIRCLE_WIDTH,
          minWidth: STORY_CIRCLE_WIDTH,
          minHeight: STORY_CIRCLE_WIDTH,
        }}
        className="relative p-[2px] rounded-full overflow-hidden flex items-center justify-center"
      >
        <div className="w-full h-full">
          <CustomImage_NEW style={{ opacity: isViewed ? 0.5 : 1 }} fill src={coverImage} />
        </div>

        <div
          style={{
            opacity: isViewed ? 0.2 : 1,
          }}
          className={`absolute top-0 left-0 right-0 bottom-0 border-[1.5px] rounded-full 
            ${isLoading ? 'animate-spin !border-t-transparent' : ''}
            ${isViewed ? 'border-impo_Surface_Outline' : `${borderColor}`}
          `}
        />
      </div>

      <CustomTypography
        fontSize="Body_Small"
        className=" !whitespace-nowrap overflow-hidden !text-impo_Neutral_OnBackground text-center"
      >
        {text}
      </CustomTypography>
    </div>
  );
};
