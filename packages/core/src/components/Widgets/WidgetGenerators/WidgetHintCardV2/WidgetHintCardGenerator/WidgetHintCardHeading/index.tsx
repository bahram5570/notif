import LinkIcon from '@assets/shared/icons/link.svg';
import BookmarkEmptyIcon from '@assets/shared/icons/saveEmpty.svg';
import BookmarkFillIcon from '@assets/shared/icons/saveFill.svg';

import { CustomTypography } from '../../../../../ui/CustomTypography';
import useWidgetHintCardBookmark from '../__hooks__/useWidgetHintCardBookmark';
import useWidgetHintCardLinkTo from '../__hooks__/useWidgetHintCardLinkTo';
import { WidgetHintCardHeadingProps } from './types';

const WidgetHintCardHeading = ({
  writerSpeciality,
  externalLink,
  internalLink,
  isBookmarked,
  writerName,
  id,
}: WidgetHintCardHeadingProps) => {
  const { bookmarkHandler, bookmark } = useWidgetHintCardBookmark({ isBookmarked, id });
  const { hasLink, linkToHandler } = useWidgetHintCardLinkTo({ internalLink, externalLink });

  return (
    <div className="w-full flex items-start justify-between gap-1">
      <div className="flex flex-col">
        <CustomTypography
          fontSize="Lable_Small"
          className="text-impo_Surface_Outline dark:text-impo_Surface_OutlineVariant"
        >
          {writerName}
        </CustomTypography>

        <CustomTypography
          fontSize="Lable_Medium"
          className="text-impo_Neutral_OnBackground dark:text-impo_Neutral_Background"
        >
          {writerSpeciality}
        </CustomTypography>
      </div>

      <div className="flex gap-2">
        <div
          onClick={bookmarkHandler}
          className="w-6 h-6 p-1 border-[1px] border-impo_Surface_Outline dark:border-impo_Surface_OutlineVariant rounded-full"
        >
          {!bookmark && (
            <BookmarkEmptyIcon className="w-full h-auto stroke-impo_Surface_InverseSurface dark:stroke-impo_Neutral_Surface" />
          )}

          {bookmark && (
            <BookmarkFillIcon className="w-full h-auto fill-impo_Surface_InverseSurface dark:fill-impo_Surface_InverseOnSurface" />
          )}
        </div>

        {hasLink && (
          <div
            onClick={linkToHandler}
            className="flex justify-center items-center w-6 h-6 p-1 border-[1px] border-impo_Surface_Outline dark:border-impo_Surface_OutlineVariant rounded-full"
          >
            <LinkIcon className="w-full h-auto stroke-impo_Surface_InverseSurface dark:stroke-impo_Neutral_Surface" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetHintCardHeading;
