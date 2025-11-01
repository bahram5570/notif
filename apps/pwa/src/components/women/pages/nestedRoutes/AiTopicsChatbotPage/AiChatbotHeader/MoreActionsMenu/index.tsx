import DialogIcon from '@assets/icons/Dialog.svg';
import EditIcon from '@assets/icons/Pen 2.svg';
import TrashIcon from '@assets/icons/trash.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { WelcomingTypeEnum } from '../../WelcomingContainer/enum';
import { AiChatModalNameEnums } from './enum';
import { MoreActionsMenuPropsType } from './type';

const MoreActionsMenu = ({ isOpen, closeHandler, welcomingType }: MoreActionsMenuPropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const deleteClickHandler = () => {
    closeHandler();

    newQueryParamsHandler({
      [MODALS.MODALS_AI_CHAT]: AiChatModalNameEnums.DeleteAiChat,
    });
    pageNavigationHandler({ showProgressBar: true, id: MODALS.MODALS_AI_CHAT });
  };

  const commentClickHandler = () => {
    closeHandler();
    newQueryParamsHandler({
      [MODALS.MODALS_AI_CHAT]: AiChatModalNameEnums.CommentAiChat,
    });
    pageNavigationHandler({ showProgressBar: true, id: MODALS.MODALS_AI_CHAT });
  };

  const suggestionClickHandler = () => {
    closeHandler();
    newQueryParamsHandler({
      [MODALS.MODALS_AI_CHAT]: AiChatModalNameEnums.SuggestionTopicChat,
    });
    pageNavigationHandler({ showProgressBar: true, id: MODALS.MODALS_AI_CHAT });
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <div
        className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center mx-auto "
        style={{ background: ' rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(2.5px)', maxWidth: MAX_SCREEN_WIDTH }}
        onClick={closeHandler}
      >
        <div
          className=" p-4 pb-6 rounded-3xl bg-white/0 backdrop-blur-[8px] border border-white shadow-lg absolute left-4 top-[70px]"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.64)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">
            {welcomingType === WelcomingTypeEnum.ChatbotMessage && (
              <>
                <div className="flex flex-row-reverse items-center gap-2" onClick={deleteClickHandler}>
                  <div
                    className="flex justify-center items-center rounded-full w-8 h-8"
                    style={{ backgroundColor: colors.Error_ErrorContainer }}
                  >
                    <TrashIcon className="w-4 h-4" style={{ stroke: colors.Error_Error }} />
                  </div>
                  <Typography scale="Lable" size="Medium">
                    حذف مکالمه
                  </Typography>
                </div>
                <div
                  className="w-[133px] h-0 rotate-180 "
                  style={{ border: `1px solid ${colors.Surface_OutlineVariant}` }}
                />
                <div className="flex flex-row-reverse items-center gap-2" onClick={commentClickHandler}>
                  <div
                    className="flex justify-center items-center rounded-full w-8 h-8"
                    style={{ backgroundColor: colors.Surface_OutlineVariant }}
                  >
                    <DialogIcon className="w-4 h-4" style={{ fill: colors.Neutral_OnSurface }} />
                  </div>
                  <Typography scale="Lable" size="Medium">
                    نظرت رو اینجا بگو
                  </Typography>
                </div>
              </>
            )}
            {welcomingType === WelcomingTypeEnum.TopicsPage && (
              <div className="flex flex-row-reverse items-center gap-2" onClick={suggestionClickHandler}>
                <div
                  className="flex justify-center items-center rounded-full w-8 h-8"
                  style={{ backgroundColor: colors.Surface_OutlineVariant }}
                >
                  <EditIcon className="w-4 h-4 " style={{ fill: colors.Neutral_OnSurface }} />
                </div>
                <Typography scale="Lable" size="Medium">
                  ثبت موضوع پیشنهادی
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreActionsMenu;
