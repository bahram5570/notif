import EditIcon from '@assets/shared/icons/Edit.svg';
import TrashIcon from '@assets/shared/icons/trash.svg';

import { FOOTER_HEIGHT, MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import { MODAL_QUERY_NAME } from '../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../hooks/useSystem';
import { CustomTypography } from '../../ui/CustomTypography';
import DeleteMemoryModal from './DeleteMemoryModal';
import { MemoryDetailOptionsPropsType } from './type';

export const MemoryDetailOptions = ({ fromMan, memoryId, validPartner, callBack }: MemoryDetailOptionsPropsType) => {
  const { appName } = useSystem();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const showCommentBtn = appName === 'MEN_PWA' ? (fromMan ? false : true) : fromMan ? true : false;

  const deleteHandler = () => {
    pageNavigationHandler({ id: 'memoryDeleteModal', showProgressBar: true });
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' });
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
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: FOOTER_HEIGHT }}
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
      {showCommentBtn && !validPartner && (
        <div onClick={onClick}>
          <div className="flex flex-row items-center gap-1 justify-center ">
            <div
              className={`pl-6 pr-4 py-2 flex justify-end items-center rounded-full gap-1   ${appName === 'MEN_PWA' ? 'bg-impo_PrimaryMan_PrimaryMan' : 'bg-impo_Primary_Primary'}`}
            >
              <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
                نظرت چیه؟
              </CustomTypography>

              <EditIcon className="w-5 h-5 !stroke-impo_White" />
            </div>
          </div>
        </div>
      )}

      <DeleteMemoryModal memoryId={memoryId} callBack={callBack} />
    </div>
  );
};
