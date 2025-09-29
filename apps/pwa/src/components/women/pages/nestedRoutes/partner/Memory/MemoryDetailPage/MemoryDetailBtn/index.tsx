import EditIcon from '@assets/icons/Edit.svg';
import TrashIcon from '@assets/icons/trash.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { MEMORY_ID } from '../constants';
import { MemoryDetailBtnPropsType } from './type';

const MemoryDetailBtn = ({ fromMan, memoryId, validPartner }: MemoryDetailBtnPropsType) => {
  const { colors } = useTheme();
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
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-3 grid grid-flow-col"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: FOOTER_HEIGTH, backgroundColor: colors.Neutral_Background }}
    >
      <div onClick={deleteHandler}>
        <div className="flex flex-row items-center gap-1 justify-center ">
          <div
            className="pl-6 pr-4 py-2 flex justify-end items-center rounded-full gap-1"
            style={{ border: `1px solid ${colors.Surface_OutlineVariant}` }}
          >
            <Typography scale="Title" size="Small" color="Neutral_OnSurface">
              حذف خاطره
            </Typography>
            <TrashIcon className="w-5 h-5" style={{ stroke: colors.Black }} />
          </div>
        </div>
      </div>
      {fromMan && !validPartner ? (
        <div onClick={onClick}>
          <div className="flex flex-row items-center gap-1 justify-center ">
            <div
              className="pl-6 pr-4 py-2 flex justify-end items-center rounded-full gap-1"
              style={{ background: colors.PrimaryWoman_Primary }}
            >
              <Typography scale="Title" size="Small" color="PrimaryMan_OnPrimaryMan">
                نظرت چیه؟
              </Typography>
              <EditIcon className="w-5 h-5" style={{ stroke: colors.White }} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MemoryDetailBtn;
