import EditIcon from '@assets/icons/Edit.svg';
import TrashIcon from '@assets/icons/trash.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { FOOTER_HEIGTH, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { MEMORY_ID } from '../constants';
import { MemoryDetailBtnPropsType } from './type';

const MemoryDetailBtn = ({ fromMan, memoryId, validPartner }: MemoryDetailBtnPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const deleteHandler = () => {
    pageNavigationHandler({ id: 'memoryDeleteModal', showProgressBar: true });
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', [MEMORY_ID]: memoryId });
  };

  const onClick = () => {
    pageNavigationHandler({
      id: 'memoryComment',
      showProgressBar: true,
      linkTo: `/protected/comment?memoryId=${memoryId}`,
    });
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-3 grid grid-flow-col bg-impo_Neutral_Background"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: FOOTER_HEIGTH }}
    >
      <div onClick={deleteHandler}>
        <div className="flex flex-row items-center gap-1 justify-center ">
          <div className="pl-6 pr-4 py-2 flex justify-end items-center rounded-full gap-1 border border-impo_Surface_OutlineVariant">
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnSurface">
              حذف خاطره
            </CustomTypography>

            <TrashIcon className="w-5 h-5 stroke-impo_Neutral_OnSurface" />
          </div>
        </div>
      </div>
      {fromMan && !validPartner ? (
        <div onClick={onClick}>
          <div className="flex flex-row items-center gap-1 justify-center ">
            <div className="pl-6 pr-4 py-2 flex justify-end items-center rounded-full gap-1 bg-impo_Primary_Primary">
              <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
                نظرت چیه؟
              </CustomTypography>

              <EditIcon className="w-5 h-5 !stroke-impo_White" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MemoryDetailBtn;
