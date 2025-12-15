import DialogIcon from '@assets/icons/Dialog.svg';
import EditIcon from '@assets/icons/Pen 2.svg';
import TrashIcon from '@assets/icons/trash.svg';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import MoreActionBtn from './MoreActionBtn';
import { AiChatModalNameEnums } from './enum';
import { MoreActionsMenuPropsType } from './type';

const MoreActionsMenu = ({
  isOpen,
  closeHandler,
  showSuggestionBtn = false,
  disableDeleteBtn,
}: MoreActionsMenuPropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const commenClickHandler = (moreActionMenuModalType: AiChatModalNameEnums) => {
    closeHandler();

    newQueryParamsHandler({
      [MODALS.MODALS_AI_CHAT]: moreActionMenuModalType,
    });
    pageNavigationHandler({ showProgressBar: true, id: MODALS.MODALS_AI_CHAT });
  };

  const deleteClickHandler = () => {
    commenClickHandler(AiChatModalNameEnums.DeleteAiChat);
  };

  const commentClickHandler = () => {
    commenClickHandler(AiChatModalNameEnums.CommentAiChat);
  };

  const suggestionClickHandler = () => {
    commenClickHandler(AiChatModalNameEnums.SuggestionTopicChat);
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className={` fixed top-0 left-0 right-0 bottom-0 flex justify-center mx-auto ${isOpen ? 'z-50' : 'z-0'}`}
      style={{ background: ' rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(2.5px)', maxWidth: MAX_SCREEN_WIDTH }}
      onClick={closeHandler}
    >
      <div
        className=" p-4 py-6 rounded-3xl  backdrop-blur-[8px] border border-white shadow-lg absolute left-4 top-[70px]"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.64)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2 ">
          {!showSuggestionBtn && (
            <>
              {disableDeleteBtn && (
                <>
                  <MoreActionBtn
                    onClickHandler={deleteClickHandler}
                    title=" حذف مکالمه"
                    isDeleteBtn={true}
                    Icon={TrashIcon}
                  />

                  <div
                    className="w-[133px] h-0 rotate-180  opacity-40"
                    style={{ border: `1px solid ${colors.Surface_OutlineVariant}` }}
                  />
                </>
              )}

              <MoreActionBtn onClickHandler={commentClickHandler} title="نظرت رو اینجا بگو" Icon={DialogIcon} />
            </>
          )}
          {showSuggestionBtn && (
            <MoreActionBtn onClickHandler={suggestionClickHandler} title="ثبت موضوع پیشنهادی" Icon={EditIcon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreActionsMenu;
