import { useMemo } from 'react';

import { MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import { useShareExperienceOverlayIndex } from '../../../hooks/useOverlayIndex';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../hooks/useSystem';
import { CustomImage } from '../../ui/CustomImage';
import { CustomTypography } from '../../ui/CustomTypography';
import { ShareExperienceToast } from '../ShareExperienceToast/ShareExperienceToast';
import { NEW_COMMENT_FOOTER_SIZE } from '../constants';
import { NewPostLinkProps } from './type';

export const NewPostLink = ({
  avatar,
  placeholder,
  queries,
  queryName,
  canSendComment = true,
  id,
  toast,
}: NewPostLinkProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceOverlayIndex();
  const { appName } = useSystem();

  const selectHandler = () => {
    newQueryParamsHandler(queries);

    increaseZIndex(queryName, id);
    pageNavigationHandler({ id: 'ShareExperienceNewCommentFooterModule', showProgressBar: true });
  };

  const bg = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'bg-impo_PrimaryMan_PrimaryMan';

      default:
        return 'bg-impo_Primary_Primary';
    }
  }, [appName]);

  return (
    <div style={{ maxWidth: MAX_SCREEN_WIDTH }} className="sticky left-0 right-0 bottom-0 flex flex-col gap-3 z-30">
      {toast && (
        <div className="px-4">
          <ShareExperienceToast toastMessage={toast} />
        </div>
      )}

      {canSendComment && (
        <div
          className="w-full bg-impo_Neutral_Surface flex items-center justify-between px-5 "
          style={{ height: NEW_COMMENT_FOOTER_SIZE, maxWidth: MAX_SCREEN_WIDTH }}
          onClick={selectHandler}
        >
          <div className={`w-fit px-3 py-1 rounded-full   select-none pointer-events-none ${bg}`}>
            <CustomTypography
              fontSize="Body_Small"
              className="text-impo_Primary_OnPrimary text-center flex flex-col justify-center items-center !h-8 !w-16"
            >
              ارسال
            </CustomTypography>
          </div>

          <div className="flex items-center gap-4 select-none pointer-events-none">
            <CustomTypography fontSize="Body_Small" className="text-impo_Surface_OutlineVariant">
              {placeholder}
            </CustomTypography>

            <CustomImage src={avatar} width={36} className="rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};
