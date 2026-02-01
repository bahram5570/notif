import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceToast from '../ShareExperienceToast';
import { NEW_COMMENT_FOOTER_SIZE } from './constants';
import { ShareExperienceNewCommentFooterModuleProps } from './types';

const ShareExperienceNewCommentFooterModule = ({
  placeholder,
  queries,
  avatar,
  toast,
  canSendComment = true,
}: ShareExperienceNewCommentFooterModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler(queries);
    pageNavigationHandler({ id: 'ShareExperienceNewCommentFooterModule', showProgressBar: true });
  };

  return (
    <div
      onClick={selectHandler}
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="sticky left-0 right-0 bottom-0 flex flex-col gap-3 z-30"
    >
      {toast && (
        <div className="px-4">
          <ShareExperienceToast toastMessage={toast} />
        </div>
      )}

      {canSendComment && (
        <div
          className="w-full bg-impo_Neutral_Surface flex items-center justify-between px-5 "
          style={{ height: NEW_COMMENT_FOOTER_SIZE, maxWidth: MAX_SCREEN_WIDTH }}
        >
          <div className="w-fit px-3 py-1 rounded-full bg-impo_Primary_Primary select-none pointer-events-none">
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

export default ShareExperienceNewCommentFooterModule;
