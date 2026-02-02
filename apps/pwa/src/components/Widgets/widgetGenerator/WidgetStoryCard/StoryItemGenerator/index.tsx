import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import useAnalytics from '@hooks/useAnalytics';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { STORY_CIRCLE_WIDTH } from '../constants';
import { StoryItemGeneratorProps } from './types';

const StoryItemGenerator = ({ coverImage, isViewed, text, id }: StoryItemGeneratorProps) => {
  const { callEvent } = useAnalytics();

  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = `StoryItemGenerator-${id}`;
  const isLoading = pageNavigationLoading === loadingId;

  const selectHandler = () => {
    callEvent('StoryClick');
    if (!isLoading) {
      newQueryParamsHandler({ [MODALS.STORY_MODAL_ID]: id });
      pageNavigationHandler({ id: loadingId, showProgressBar: false });
    }
  };

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
        <CustomImage src={coverImage} width={'100%'} height={'100%'} style={{ opacity: isViewed ? 0.5 : 1 }} />

        <div
          style={{
            opacity: isViewed ? 0.2 : 1,
          }}
          className={`absolute top-0 left-0 right-0 bottom-0 border-[1.5px] rounded-full 
            ${isLoading ? 'animate-spin !border-t-transparent' : ''}
            ${isViewed ? 'border-impo_Surface_Outline' : 'border-impo_Primary_Primary'}
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

export default StoryItemGenerator;
