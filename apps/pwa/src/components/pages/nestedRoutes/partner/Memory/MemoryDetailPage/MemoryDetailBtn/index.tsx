import EditIcon from '@assets/icons/Edit.svg';
import TrashIcon from '@assets/icons/trash.svg';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
            <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnSurface">
              حذف خاطره
            </Dark_Typography>

            <TrashIcon className="w-5 h-5 stroke-impo_Neutral_OnSurface" />
          </div>
        </div>
      </div>
      {fromMan && !validPartner ? (
        <div onClick={onClick}>
          <div className="flex flex-row items-center gap-1 justify-center ">
            <div className="pl-6 pr-4 py-2 flex justify-end items-center rounded-full gap-1 bg-impo_Primary_Primary">
              <Dark_Typography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
                نظرت چیه؟
              </Dark_Typography>

              <EditIcon className="w-5 h-5 !stroke-impo_White" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MemoryDetailBtn;
